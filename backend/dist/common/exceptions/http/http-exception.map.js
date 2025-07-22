"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpExceptionMap = void 0;
const common_1 = require("@nestjs/common");
const http_error_code_enum_1 = require("./http-error-code.enum");
exports.httpExceptionMap = {
    [http_error_code_enum_1.HttpErrorCode.NOT_FOUND]: {
        status: common_1.HttpStatus.NOT_FOUND,
        message: 'Resource not found.',
    },
    [http_error_code_enum_1.HttpErrorCode.UNAUTHORIZED]: {
        status: common_1.HttpStatus.UNAUTHORIZED,
        message: 'Unauthorized access.',
    },
    [http_error_code_enum_1.HttpErrorCode.TOKEN_EXPIRED]: {
        status: common_1.HttpStatus.UNAUTHORIZED,
        message: 'Token has expired.',
    },
    [http_error_code_enum_1.HttpErrorCode.TOKEN_NOT_PROVIDED]: {
        status: common_1.HttpStatus.UNAUTHORIZED,
        message: 'Token not provided.',
    },
    [http_error_code_enum_1.HttpErrorCode.INVALID_RESOURCE_CREDENTIALS]: {
        status: common_1.HttpStatus.UNAUTHORIZED,
        message: 'Invalid credentials for the resource.',
    },
};
//# sourceMappingURL=http-exception.map.js.map