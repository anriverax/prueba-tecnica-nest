import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import configuration from './config/configuration';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { validate } from './config/env.validation';
import { PrismaModule } from './services/prisma/prisma.module';
import { UserModule } from './core/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate,
      isGlobal: true,
      load: [configuration],
    }),
    PrismaModule,
    UserModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
