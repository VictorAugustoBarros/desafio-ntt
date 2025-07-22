import { BaseDomainException } from '../../../common/exceptions/base-exception.error';
import { ProductErrorCode } from './product-error.enum';

export class ProductExceptionError extends BaseDomainException {
  constructor(code: ProductErrorCode, message?: string) {
    super(code, message);
  }
}
