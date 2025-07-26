"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productErrorMap = void 0;
const common_1 = require("@nestjs/common");
const product_error_enum_1 = require("./product-error.enum");
exports.productErrorMap = {
    [product_error_enum_1.ProductErrorCode.PRODUCT_NOT_FOUND]: {
        status: common_1.HttpStatus.NOT_FOUND,
        message: 'Produto não encontrado.',
    },
    [product_error_enum_1.ProductErrorCode.PRODUCT_CATEGORY_NOT_FOUND]: {
        status: common_1.HttpStatus.NOT_FOUND,
        message: 'Categoria do Produto não encontrada.',
    },
    [product_error_enum_1.ProductErrorCode.PRODUCT_ALREADY_EXISTS]: {
        status: common_1.HttpStatus.CONFLICT,
        message: 'Produto já existe.',
    },
};
//# sourceMappingURL=product-exception.map.js.map