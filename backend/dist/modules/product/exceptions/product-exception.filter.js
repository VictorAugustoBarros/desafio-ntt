"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ProductExceptionFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const product_exception_error_1 = require("./product-exception.error");
const product_exception_map_1 = require("./product-exception.map");
let ProductExceptionFilter = ProductExceptionFilter_1 = class ProductExceptionFilter {
    logger = new common_1.Logger(ProductExceptionFilter_1.name);
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const errorInfo = product_exception_map_1.productErrorMap[exception.code];
        const statusCode = errorInfo?.status ?? common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const message = errorInfo?.message ?? 'Unexpected error occurred';
        response.status(statusCode).json({
            statusCode,
            content: { message },
        });
    }
};
exports.ProductExceptionFilter = ProductExceptionFilter;
exports.ProductExceptionFilter = ProductExceptionFilter = ProductExceptionFilter_1 = __decorate([
    (0, common_1.Catch)(product_exception_error_1.ProductExceptionError)
], ProductExceptionFilter);
//# sourceMappingURL=product-exception.filter.js.map