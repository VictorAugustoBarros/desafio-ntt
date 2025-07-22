import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';
import { CategoryExceptionError } from './category-exception.error';
import { categoryErrorMap } from './category-exception.map';

@Catch(CategoryExceptionError)
export class CategoryExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(CategoryExceptionFilter.name);

  catch(exception: CategoryExceptionError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const errorInfo = categoryErrorMap[exception.code];
    const statusCode = errorInfo?.status ?? HttpStatus.INTERNAL_SERVER_ERROR;
    const message = errorInfo?.message ?? 'Unexpected error occurred';

    response.status(statusCode).json({
      statusCode,
      content: { message },
    });
  }
}
