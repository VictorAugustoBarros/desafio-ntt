import { HttpStatus } from '@nestjs/common';
import { HttpErrorCode } from './http-error-code.enum';
import { ErrorMap } from '../base-exception.map';

export const httpExceptionMap: ErrorMap = {
  [HttpErrorCode.NOT_FOUND]: {
    status: HttpStatus.NOT_FOUND,
    message: 'Resource not found.',
  },
  [HttpErrorCode.UNAUTHORIZED]: {
    status: HttpStatus.UNAUTHORIZED,
    message: 'Unauthorized access.',
  },
  [HttpErrorCode.TOKEN_EXPIRED]: {
    status: HttpStatus.UNAUTHORIZED,
    message: 'Token has expired.',
  },
  [HttpErrorCode.TOKEN_NOT_PROVIDED]: {
    status: HttpStatus.UNAUTHORIZED,
    message: 'Token not provided.',
  },
  [HttpErrorCode.INVALID_RESOURCE_CREDENTIALS]: {
    status: HttpStatus.UNAUTHORIZED,
    message: 'Invalid credentials for the resource.',
  },
};
