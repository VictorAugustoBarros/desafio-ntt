"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductExceptionError = void 0;
const base_exception_error_1 = require("../../../common/exceptions/base-exception.error");
class ProductExceptionError extends base_exception_error_1.BaseDomainException {
    constructor(code, message) {
        super(code, message);
    }
}
exports.ProductExceptionError = ProductExceptionError;
//# sourceMappingURL=product-exception.error.js.map