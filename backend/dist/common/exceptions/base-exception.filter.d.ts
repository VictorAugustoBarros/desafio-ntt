import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { BaseDomainException } from './base-exception.error';
import { ErrorMap } from './base-exception.map';
export declare class BaseDomainExceptionFilter implements ExceptionFilter {
    private readonly errorMap;
    private readonly contextName;
    constructor(errorMap: ErrorMap, contextName: string);
    private readonly logger;
    catch(exception: BaseDomainException, host: ArgumentsHost): void;
}
