"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryExceptionError = void 0;
const base_exception_error_1 = require("../../../common/exceptions/base-exception.error");
class CategoryExceptionError extends base_exception_error_1.BaseDomainException {
    constructor(code, message) {
        super(code, message);
    }
}
exports.CategoryExceptionError = CategoryExceptionError;
//# sourceMappingURL=category-exception.error.js.map