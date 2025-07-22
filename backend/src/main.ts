/* eslint-disable @typescript-eslint/no-floating-promises */
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder, OpenAPIObject } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('NTT Data - Desafio')
    .setDescription('Gerenciamento de Produtos e Category de uma Loja')
    .setVersion('1.0')
    .build();

  const documentFactory: () => OpenAPIObject = () =>
    SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, documentFactory());

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
