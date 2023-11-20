/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './infraestructure/modules';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(AppModule.port || 3000);
  const logger = new Logger('NestApplication');
  logger.log(`Application is running on Port: ${(await app.getUrl()).split(":").pop()}`);
}
bootstrap();
