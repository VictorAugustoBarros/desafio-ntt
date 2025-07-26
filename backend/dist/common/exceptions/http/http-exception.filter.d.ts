import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { HttpExceptionError } from './http-exception.error';
export declare class HttpExceptionFilter implements ExceptionFilter {
    private readonly logger;
    catch(exception: HttpExceptionError, host: ArgumentsHost): void;
}
