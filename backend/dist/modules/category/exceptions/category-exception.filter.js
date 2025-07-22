"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CategoryExceptionFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const category_exception_error_1 = require("./category-exception.error");
const category_exception_map_1 = require("./category-exception.map");
let CategoryExceptionFilter = CategoryExceptionFilter_1 = class CategoryExceptionFilter {
    logger = new common_1.Logger(CategoryExceptionFilter_1.name);
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const errorInfo = category_exception_map_1.categoryErrorMap[exception.code];
        const statusCode = errorInfo?.status ?? common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const message = errorInfo?.message ?? 'Unexpected error occurred';
        response.status(statusCode).json({
            statusCode,
            content: { message },
        });
    }
};
exports.CategoryExceptionFilter = CategoryExceptionFilter;
exports.CategoryExceptionFilter = CategoryExceptionFilter = CategoryExceptionFilter_1 = __decorate([
    (0, common_1.Catch)(category_exception_error_1.CategoryExceptionError)
], CategoryExceptionFilter);
//# sourceMappingURL=category-exception.filter.js.map