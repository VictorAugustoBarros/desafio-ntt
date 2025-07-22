"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDomainExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
class BaseDomainExceptionFilter {
    errorMap;
    contextName;
    constructor(errorMap, contextName) {
        this.errorMap = errorMap;
        this.contextName = contextName;
    }
    logger = new common_1.Logger(BaseDomainExceptionFilter.name);
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const errorInfo = this.errorMap[exception.code];
        const statusCode = errorInfo?.status ?? common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const message = errorInfo?.message ?? 'Unexpected error occurred';
        this.logger.error(`[${this.contextName}]`, {
            code: exception.code,
            message,
        });
        response.status(statusCode).json({
            statusCode,
            content: { message },
        });
    }
}
exports.BaseDomainExceptionFilter = BaseDomainExceptionFilter;
//# sourceMappingURL=base-exception.filter.js.map