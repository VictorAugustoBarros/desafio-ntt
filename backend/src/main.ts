/* eslint-disable @typescript-eslint/no-floating-promises */
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder, OpenAPIObject } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    // origin: ['http://localhost:4000', 'http://ntt-data-frontend:4000'],
    origin: true,
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('NTT Data - Desafio')
    .setDescription('Gerenciamento de Produtos e Categorias de uma Loja')
    .setVersion('1.0')
    .build();

  const documentFactory: () => OpenAPIObject = () =>
    SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/docs', app, documentFactory());

  await app.listen(3000);
}

bootstrap();
