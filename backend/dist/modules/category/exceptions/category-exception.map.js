"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryErrorMap = void 0;
const common_1 = require("@nestjs/common");
const category_error_enum_1 = require("./category-error.enum");
exports.categoryErrorMap = {
    [category_error_enum_1.CategoryErrorCode.CATEGORY_NOT_FOUND]: {
        status: common_1.HttpStatus.NOT_FOUND,
        message: 'Categoria não encontrada.',
    },
    [category_error_enum_1.CategoryErrorCode.CATEGORY_ALREADY_EXISTS]: {
        status: common_1.HttpStatus.CONFLICT,
        message: 'Categoria já existe.',
    },
};
//# sourceMappingURL=category-exception.map.js.map