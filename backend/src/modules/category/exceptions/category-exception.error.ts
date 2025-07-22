import { BaseDomainException } from '../../../common/exceptions/base-exception.error';
import { CategoryErrorCode } from './category-error.enum';

export class CategoryExceptionError extends BaseDomainException {
  constructor(code: CategoryErrorCode, message?: string) {
    super(code, message);
  }
}
