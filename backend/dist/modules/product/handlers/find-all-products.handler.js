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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllProductsHandler = void 0;
const common_1 = require("@nestjs/common");
const find_all_products_use_case_1 = require("../use-cases/find-all-products.use-case");
const redis_service_1 = require("../../../shared/redis/redis.service");
const redis_keys_constants_1 = require("../../../shared/redis/constants/redis-keys.constants");
let FindAllProductsHandler = class FindAllProductsHandler {
    findAllProductsUseCase;
    redisService;
    constructor(findAllProductsUseCase, redisService) {
        this.findAllProductsUseCase = findAllProductsUseCase;
        this.redisService = redisService;
    }
    async execute(paginationDto) {
        const cacheKey = paginationDto.limit || paginationDto.offset
            ? redis_keys_constants_1.REDIS_KEYS.PRODUCTS_PAGINATED(paginationDto.limit, paginationDto.offset)
            : redis_keys_constants_1.REDIS_KEYS.PRODUCT_ALL;
        const cached = await this.redisService.getKey(cacheKey);
        if (cached) {
            return JSON.parse(cached);
        }
        if (cached) {
            return JSON.parse(cached);
        }
        const products = await this.findAllProductsUseCase.execute(paginationDto);
        const response = {
            products: products.map((product) => ({
                uuid: product.uuid,
                name: product.name,
                description: product.description,
                price: product.price,
                category: {
                    uuid: product.category?.uuid ?? '',
                    name: product.category?.name ?? '',
                },
            })),
        };
        await this.redisService.setKey(cacheKey, JSON.stringify(response), 60);
        return response;
    }
};
exports.FindAllProductsHandler = FindAllProductsHandler;
exports.FindAllProductsHandler = FindAllProductsHandler = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [find_all_products_use_case_1.FindAllProductsUseCase,
        redis_service_1.RedisService])
], FindAllProductsHandler);
//# sourceMappingURL=find-all-products.handler.js.map