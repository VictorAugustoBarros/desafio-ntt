import { HttpStatus } from '@nestjs/common';
import { ProductErrorCode } from './product-error.enum';
import { ErrorMap } from '../../../common/exceptions/base-exception.map';

export const productErrorMap: ErrorMap = {
  [ProductErrorCode.PRODUCT_NOT_FOUND]: {
    status: HttpStatus.NOT_FOUND,
    message: 'Produto não encontrado.',
  },
  [ProductErrorCode.PRODUCT_CATEGORY_NOT_FOUND]: {
    status: HttpStatus.NOT_FOUND,
    message: 'Categoria do Produto não encontrada.',
  },
  [ProductErrorCode.PRODUCT_ALREADY_EXISTS]: {
    status: HttpStatus.CONFLICT,
    message: 'Produto já existe.',
  },
};
