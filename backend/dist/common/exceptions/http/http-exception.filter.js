"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HttpExceptionFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const http_exception_error_1 = require("./http-exception.error");
const http_exception_map_1 = require("./http-exception.map");
let HttpExceptionFilter = HttpExceptionFilter_1 = class HttpExceptionFilter {
    logger = new common_1.Logger(HttpExceptionFilter_1.name);
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const errorInfo = http_exception_map_1.httpExceptionMap[exception.code];
        const statusCode = errorInfo?.status ?? common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const message = errorInfo?.message ?? 'Unknown resource error';
        this.logger.error(`[ResourceError]`, {
            code: exception.code,
            message,
        });
        response.status(statusCode).json({
            statusCode,
            content: { message },
        });
    }
};
exports.HttpExceptionFilter = HttpExceptionFilter;
exports.HttpExceptionFilter = HttpExceptionFilter = HttpExceptionFilter_1 = __decorate([
    (0, common_1.Catch)(http_exception_error_1.HttpExceptionError)
], HttpExceptionFilter);
//# sourceMappingURL=http-exception.filter.js.map