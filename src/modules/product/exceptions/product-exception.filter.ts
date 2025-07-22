import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';
import { ProductExceptionError } from './product-exception.error';
import { productErrorMap } from './product-exception.map';

@Catch(ProductExceptionError)
export class ProductExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(ProductExceptionFilter.name);

  catch(exception: ProductExceptionError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const errorInfo = productErrorMap[exception.code];
    const statusCode = errorInfo?.status ?? HttpStatus.INTERNAL_SERVER_ERROR;
    const message = errorInfo?.message ?? 'Unexpected error occurred';

    response.status(statusCode).json({
      statusCode,
      content: { message },
    });
  }
}
