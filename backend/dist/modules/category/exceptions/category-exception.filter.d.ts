import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { CategoryExceptionError } from './category-exception.error';
export declare class CategoryExceptionFilter implements ExceptionFilter {
    private readonly logger;
    catch(exception: CategoryExceptionError, host: ArgumentsHost): void;
}
