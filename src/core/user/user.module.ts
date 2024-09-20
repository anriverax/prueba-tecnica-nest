import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CloudModule } from '@/services/cloudinary/cloud.module';

@Module({
  imports: [CloudModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
