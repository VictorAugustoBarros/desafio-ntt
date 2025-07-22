import { BaseDomainException } from '../base-exception.error';
import { HttpErrorCode } from './http-error-code.enum';

export class HttpExceptionError extends BaseDomainException {
  constructor(code: HttpErrorCode, message?: string) {
    super(code, message);
  }
}
