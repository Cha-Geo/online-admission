import * as fs from 'fs';

export const MAX_IMAGE_SIZE_IN_BYTES = 2000000;

export function getFilesizeInBytes(filename: string) {
  const stats = fs.statSync(filename);
  const fileSizeInBytes = stats.size;
  return fileSizeInBytes;
}

export async function getAllImagesInDirectory(directoryPath: string) {
  try {
    const files = await fs.promises.readdir(directoryPath);
    return files.filter((file) => file.match(/\.(jpg|jpeg|png|gif)$/i));
  } catch (error) {
    throw error;
  }
}
