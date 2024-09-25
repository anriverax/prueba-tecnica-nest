import cloudinary from '@/config/cloudinary.config';
import { Injectable } from '@nestjs/common';
import { PassThrough } from 'stream';
import * as sharp from 'sharp';

@Injectable({})
export class CloudService {
  async uploadImage(file: Express.Multer.File) {
    return new Promise((resolve, reject) => {
      // Comprimir la imagen antes de subirla
      sharp(file.buffer)
        .resize(1000) // Ajusta el tamaño de la imagen
        .jpeg({ quality: 80 }) // Configura la calidad del JPEG
        .toBuffer()
        .then((compressedBuffer) => {
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
          bufferStream.end(compressedBuffer); // Usar el buffer comprimido
          bufferStream.pipe(stream);
        })
        .catch((error) => reject(error));
    });
  }
}
