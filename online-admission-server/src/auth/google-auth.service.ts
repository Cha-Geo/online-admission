import { Injectable } from '@nestjs/common';
import { Auth, drive_v3, google } from 'googleapis';
import * as fs from 'fs';
import * as path from 'path';
import { googleOAuthConfig } from 'src/shared/configs/auth.config';

@Injectable()
export class GoogoleAuthService {
  private readonly oauth2Client: Auth.OAuth2Client;
  private readonly drive: drive_v3.Drive;
  private readonly TOKEN_PATH = process.env.TOKEN_PATH;
  private readonly SCOPES = ['https://www.googleapis.com/auth/drive'];
  constructor() {
    const { clientId, clientSecret, redirectUri } = googleOAuthConfig;

    this.oauth2Client = new google.auth.OAuth2(
      clientId,
      clientSecret,
      redirectUri,
    );

    const rootPath = process.cwd();
    const filePath = path.join(rootPath, this.TOKEN_PATH);
    console.log(filePath);

    try {
      const data = fs.readFileSync(filePath, 'utf8');
      console.log(data);

      const jsonData = JSON.parse(data);
      console.log(jsonData);
      this.oauth2Client.setCredentials(jsonData);
      console.log(this.oauth2Client.credentials);
    } catch (error) {
      console.error(`Error reading JSON file "${filePath}":`, error);
      return null;
    }

    this.drive = google.drive({
      version: 'v3',
      auth: this.oauth2Client,
    });
  }

  async getClient() {
    return this.oauth2Client;
  }

  async getDrive() {
    return this.drive;
  }

  async getUrl() {
    const url = this.oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: this.SCOPES,
    });
    return url;
  }

  async getFileMetadata(fileId: string, drive: drive_v3.Drive) {
    const res = await drive.files.get({
      fileId: fileId,
    });
    const fileMetadata = res.data;
    console.log(fileMetadata);
    return fileMetadata;
  }

  async listFiles() {
    try {
      const drive = await this.getDrive();
      const res = await drive.files.list({
        pageSize: 10,
        fields: 'nextPageToken, files(id, name)',
      });
      const files = res.data.files;
      console.log('files: ', files);
      if (files.length === 0) {
        console.log('No files found.');
        return [];
      }
      return files.map((file) => ({
        name: file.name,
        id: file.id,
      }));
    } catch (error) {
      console.error('Error listing files:', error);
      throw error;
    }
  }

  async uploadBasic() {
    const drive = await this.getDrive();
    const requestBody = {
      name: 'photo.jpg_uploaded_by_George',
      fields: 'id',
    };
    const media = {
      mimeType: 'image/jpeg',
      body: fs.createReadStream('photo.jpg'),
    };
    try {
      const file = await drive.files.create({
        requestBody,
        media: media,
      });
      console.log('File Id:', file.data.id);
      return file.data.id;
    } catch (err) {
      throw err;
    }
  }

  async downloadFile(fileId: string) {
    const drive = await this.getDrive();
    try {
      const file = await drive.files.get({
        fileId: fileId,
        alt: 'media',
      });
      return file;
    } catch (err) {
      throw err;
    }
  }
}
