import { Injectable } from '@nestjs/common';
import { Auth, drive_v3, google } from 'googleapis';
import * as fs from 'fs';
import * as path from 'path';
import * as stream from 'stream';
import { googleOAuthConfig } from 'src/shared/configs/auth.config';
import { ProgramsImagesService } from 'src/images/programs_images/programs_images.service';
import { IUploadFile } from 'src/shared/interfaces/file-upload.interface';

@Injectable()
export class GoogoleAuthService {
  private readonly oauth2Client: Auth.OAuth2Client;
  private readonly sa_auth: Auth.GoogleAuth;
  private readonly drive: drive_v3.Drive;
  private readonly TOKEN_PATH = process.env.TOKEN_PATH;
  private readonly SA_TOKEN_PATH = process.env.SA_TOKEN_PATH;
  private readonly SCOPES = [process.env.SCOPE_A];
  constructor(private imageService: ProgramsImagesService) {
    const { clientId, clientSecret, redirectUri } = googleOAuthConfig;
    const rootPath = process.cwd();
    const filePath = path.join(rootPath, this.TOKEN_PATH);
    const sa_filePath = path.join(rootPath, this.SA_TOKEN_PATH);

    this.oauth2Client = new google.auth.OAuth2(
      clientId,
      clientSecret,
      redirectUri,
    );

    this.sa_auth = new google.auth.GoogleAuth({
      keyFile: sa_filePath,
      scopes: this.SCOPES,
    });

    try {
      const data = fs.readFileSync(filePath, 'utf8');

      const jsonData = JSON.parse(data);

      this.oauth2Client.setCredentials(jsonData);
    } catch (error) {
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
      const nextPageToken = res.data.nextPageToken;
      const files = res.data.files;
      if (files.length === 0) {
        return [];
      }
      const filesResult = files.map((file) => ({
        name: file.name,
        id: file.id,
      }));

      return {
        filesResult,
        nextPageToken,
      };
    } catch (error) {
      throw error;
    }
  }

  async uploadFile(
    name: string,
    mimeType: string,
    buffer: Buffer,
    filename?: string,
    isCreate?: boolean,
  ) {
    const drive = await this.getDrive();

    // Check if a file with the same name already exists
    const query = `name = '${name}'`;
    const existingFiles = await drive.files.list({
      q: query,
      fields: 'files(id)',
    });

    if (existingFiles.data.files.length > 0) {
      // A file with the same name already exists, handle this case as needed
      throw new Error('A file with the same name already exists.');
    }

    // If no file with the same name exists, proceed with the upload
    const bufferStream = new stream.PassThrough();
    bufferStream.end(buffer);

    const fileMetadata = {
      name: name,
      fields: 'id',
    };

    const media = {
      mimeType: mimeType,
      body: bufferStream,
    };

    try {
      const uploadedFile = await drive.files.create({
        requestBody: fileMetadata,
        media: media,
        uploadType: 'multipart',
      });

      console.log('File ID:', uploadedFile.data);
      const driveid = uploadedFile.data.id;
      const imageInfo: IUploadFile = {
        driveid,
        filename,
      };

      if (isCreate) {
        return await this.imageService.storeImage(imageInfo);
      }

      return uploadedFile.data.id;
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
