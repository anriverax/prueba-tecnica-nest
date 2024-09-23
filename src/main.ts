import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { json, urlencoded } from 'express';

/* eslint-disable */
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true, bodyParser: true });

  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ limit: '50mb', extended: true }));

  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  await app.listen(3001, () =>
    console.log(`
🚀 Server ready at: http://localhost:3001`),
  );
}
bootstrap();
