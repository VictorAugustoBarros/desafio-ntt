import { HttpStatus } from '@nestjs/common';
import { CategoryErrorCode } from './category-error.enum';
import { ErrorMap } from '../../../common/exceptions/base-exception.map';

export const categoryErrorMap: ErrorMap = {
  [CategoryErrorCode.CATEGORY_NOT_FOUND]: {
    status: HttpStatus.NOT_FOUND,
    message: 'Categoria não encontrada.',
  },
  [CategoryErrorCode.CATEGORY_ALREADY_EXISTS]: {
    status: HttpStatus.CONFLICT,
    message: 'Categoria já existe.',
  },
};
