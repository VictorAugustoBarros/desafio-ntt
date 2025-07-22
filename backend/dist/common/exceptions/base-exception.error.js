"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDomainException = void 0;
class BaseDomainException extends Error {
    code;
    constructor(code, message = '') {
        super(message);
        this.name = this.constructor.name;
        this.code = code;
    }
}
exports.BaseDomainException = BaseDomainException;
//# sourceMappingURL=base-exception.error.js.map