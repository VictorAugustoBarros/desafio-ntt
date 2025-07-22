import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';
import { HttpExceptionError } from './http-exception.error';
import { httpExceptionMap } from './http-exception.map';

@Catch(HttpExceptionError)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: HttpExceptionError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const errorInfo = httpExceptionMap[exception.code];
    const statusCode = errorInfo?.status ?? HttpStatus.INTERNAL_SERVER_ERROR;
    const message = errorInfo?.message ?? 'Unknown resource error';

    this.logger.error(`[ResourceError]`, {
      code: exception.code,
      message,
    });

    response.status(statusCode).json({
      statusCode,
      content: { message },
    });
  }
}
