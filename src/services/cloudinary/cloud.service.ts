import cloudinary from '@/config/cloudinary.config';
import { Injectable } from '@nestjs/common';
import { PassThrough } from 'stream';

@Injectable({})
export class CloudService {
  async uploadImage(file: Express.Multer.File) {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          resource_type: 'image',
          access_mode: 'public',
          transformation: [
            { width: 1000, crop: 'scale' },
            { quality: 'auto:best' },
            { fetch_format: 'auto' },
          ],
        },
        (error, result) => {
          if (error) {
            console.log('ERROR');
            return reject(error);
          }
          resolve(result);
        },
      );

      const bufferStream = new PassThrough();
      bufferStream.end(file.buffer);
      bufferStream.pipe(stream);
    });
  }
}
