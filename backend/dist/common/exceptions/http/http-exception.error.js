"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionError = void 0;
const base_exception_error_1 = require("../base-exception.error");
class HttpExceptionError extends base_exception_error_1.BaseDomainException {
    constructor(code, message) {
        super(code, message);
    }
}
exports.HttpExceptionError = HttpExceptionError;
//# sourceMappingURL=http-exception.error.js.map