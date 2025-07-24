"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductHandler = void 0;
const common_1 = require("@nestjs/common");
const create_product_use_case_1 = require("../use-cases/create-product.use-case");
const product_exception_error_1 = require("../exceptions/product-exception.error");
const product_error_enum_1 = require("../exceptions/product-error.enum");
const category_constants_1 = require("../../category/constants/category.constants");
const redis_service_1 = require("../../../shared/redis/redis.service");
const redis_keys_constants_1 = require("../../../shared/redis/constants/redis-keys.constants");
let CreateProductHandler = class CreateProductHandler {
    categoryService;
    createProductUseCase;
    redisService;
    constructor(categoryService, createProductUseCase, redisService) {
        this.categoryService = categoryService;
        this.createProductUseCase = createProductUseCase;
        this.redisService = redisService;
    }
    async execute(request) {
        const category = await this.categoryService.getCategory({
            uuid: request.categoryUuid,
        });
        if (!category) {
            throw new product_exception_error_1.ProductExceptionError(product_error_enum_1.ProductErrorCode.PRODUCT_CATEGORY_NOT_FOUND);
        }
        const product = await this.createProductUseCase.execute(request.name, request.description, request.price, category.id);
        await this.redisService.invalidateKey(redis_keys_constants_1.REDIS_KEYS.PRODUCT_ALL);
        await this.redisService.invalidateKey(redis_keys_constants_1.REDIS_KEYS.INVALIDATE_PRODUCT_ALL);
        return {
            message: 'Product criada com sucesso',
            uuid: String(product.uuid),
        };
    }
};
exports.CreateProductHandler = CreateProductHandler;
exports.CreateProductHandler = CreateProductHandler = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(category_constants_1.ICategoryServiceToken)),
    __metadata("design:paramtypes", [Object, create_product_use_case_1.CreateProductUseCase,
        redis_service_1.RedisService])
], CreateProductHandler);
//# sourceMappingURL=create-product.handler.js.map