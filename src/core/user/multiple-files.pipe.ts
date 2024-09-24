import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { ParseFilePipe, MaxFileSizeValidator, FileTypeValidator } from '@nestjs/common';

@Injectable()
export class ParseMultipleFilesPipe implements PipeTransform {
  async transform(value: Express.Multer.File[]) {
    if (!value || !Array.isArray(value)) {
      throw new BadRequestException('No se proporcionaron archivos válidos');
    }

    const parseFilePipe = new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 20 * 1024 * 1024 }), // 20MB
        new FileTypeValidator({ fileType: 'image/jpeg' }),
      ],
    });

    const processedFiles = await Promise.all(value.map((file) => parseFilePipe.transform(file)));

    return processedFiles;
  }
}
