import { FileFieldsInterceptor } from '@nestjs/platform-express';
// import { UserService } from './user.service';
import {
  Body,
  Controller,
  Post,
  Query,
  Get,
  UploadedFiles,
  UseInterceptors,
  Logger,
  UseGuards,
} from '@nestjs/common';
import { UserDataDto } from './user.dto';
import { CloudService } from '@/services/cloudinary/cloud.service';
import { UserService } from './user.service';
import { ApiKeyGuard } from '@/guards/strategy';
import { ParseMultipleFilesPipe } from './multiple-files.pipe';
import multer from 'multer';

@Controller('api/user')
@UseGuards(ApiKeyGuard)
export class UserController {
  private readonly logger = new Logger(UserController.name);
  constructor(
    private readonly userService: UserService,
    private readonly cloudService: CloudService,
  ) {}

  @Get()
  async getUsers(@Query('page') page: string = '1', @Query('pageSize') pageSize: string = '10') {
    this.logger.log('Fetching all users');
    const pageNumber = parseInt(page, 10);
    const pageSizeNumber = parseInt(pageSize, 10);
    return this.userService.getAll(pageNumber, pageSizeNumber);
  }

  @Post('create')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'images', maxCount: 2 },
        { name: 'selfie', maxCount: 1 },
      ],
      {
        storage: multer.memoryStorage(),
        limits: { fileSize: 20 * 1024 * 1024 }, // 20MB limit
        fileFilter: (req, file, callback) => {
          console.log(req);
          if (!file.mimetype.match(/^image\/(jpeg|png)$/)) {
            return callback(new Error('Only JPEG and PNG files are allowed'), false);
          }
          callback(null, true);
        },
      },
    ),
  )
  async create(
    @Body() createUserDto: UserDataDto,
    @UploadedFiles(ParseMultipleFilesPipe)
    files: { images: Express.Multer.File[]; selfie: Express.Multer.File }, // Recibe todo en un solo objeto
  ) {
    this.logger.log(`Creating a new user: ${JSON.stringify(createUserDto)}`);
    const imagesUrls: string[] = [];

    for (const img of files.images) {
      const url = await this.cloudService.uploadImage(img);
      imagesUrls.push(url['secure_url']);
    }

    const selfieUrl = await this.cloudService.uploadImage(files.selfie[0]);

    const newData = {
      ...createUserDto,
      selfie: selfieUrl['secure_url'],
      images: imagesUrls,
    };

    const result = await this.userService.create(newData);
    this.logger.log(`User created: ${result.data}`);
    return result;
  }
}
