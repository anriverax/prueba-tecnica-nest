import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { ParseFilePipe, MaxFileSizeValidator, FileTypeValidator } from '@nestjs/common';

@Injectable()
export class ParseMultipleFilesPipe implements PipeTransform {
  async transform(value: { [fieldname: string]: Express.Multer.File[] }) {
    if (!value || Object.keys(value).length === 0) {
      throw new BadRequestException('No se proporcionaron archivos válidos');
    }

    const parseFilePipe = new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 20 * 1024 * 1024 }), // 20MB
        new FileTypeValidator({ fileType: /(jpg|jpeg|png)$/ }),
      ],
    });

    const result: { [fieldname: string]: Express.Multer.File[] } = {};

    for (const [fieldname, files] of Object.entries(value)) {
      result[fieldname] = await Promise.all(files.map((file) => parseFilePipe.transform(file)));
    }

    return result;
  }
}
