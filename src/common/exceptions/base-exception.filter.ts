import {
  ExceptionFilter,
  ArgumentsHost,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';
import { BaseDomainException } from './base-exception.error';
import { ErrorMap } from './base-exception.map';

export class BaseDomainExceptionFilter implements ExceptionFilter {
  constructor(
    private readonly errorMap: ErrorMap,
    private readonly contextName: string,
  ) {}

  private readonly logger = new Logger(BaseDomainExceptionFilter.name);

  catch(exception: BaseDomainException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const errorInfo = this.errorMap[exception.code];
    const statusCode = errorInfo?.status ?? HttpStatus.INTERNAL_SERVER_ERROR;
    const message = errorInfo?.message ?? 'Unexpected error occurred';

    this.logger.error(`[${this.contextName}]`, {
      code: exception.code,
      message,
    });

    response.status(statusCode).json({
      statusCode,
      content: { message },
    });
  }
}
