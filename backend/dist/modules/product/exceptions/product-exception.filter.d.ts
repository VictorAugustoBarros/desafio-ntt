import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { ProductExceptionError } from './product-exception.error';
export declare class ProductExceptionFilter implements ExceptionFilter {
    private readonly logger;
    catch(exception: ProductExceptionError, host: ArgumentsHost): void;
}
