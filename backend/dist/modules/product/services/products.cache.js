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
exports.ProductsCacheService = void 0;
const common_1 = require("@nestjs/common");
const redis_keys_constants_1 = require("../../../shared/redis/constants/redis-keys.constants");
const redis_service_1 = require("../../../shared/redis/redis.service");
let ProductsCacheService = class ProductsCacheService {
    redis;
    constructor(redis) {
        this.redis = redis;
    }
    async getProduct(uuid) {
        const data = await this.redis.getKey(redis_keys_constants_1.REDIS_KEYS.PRODUCT(uuid));
        return data ? JSON.parse(data) : null;
    }
    async setProduct(product) {
        await this.redis.setKey(redis_keys_constants_1.REDIS_KEYS.PRODUCT(product.uuid), JSON.stringify(product));
    }
    async invalidateProduct(uuid) {
        await this.redis.invalidateKey(redis_keys_constants_1.REDIS_KEYS.PRODUCT(uuid));
    }
    async getProducts() {
        const data = await this.redis.getKey(redis_keys_constants_1.REDIS_KEYS.PRODUCT_ALL);
        return data ? JSON.parse(data) : null;
    }
    async setProducts(products) {
        await this.redis.setKey(redis_keys_constants_1.REDIS_KEYS.PRODUCT_ALL, JSON.stringify(products));
    }
    async getPaginatedProducts(limit, offset) {
        const key = redis_keys_constants_1.REDIS_KEYS.PRODUCTS_PAGINATED(limit, offset);
        const data = await this.redis.getKey(key);
        return data ? JSON.parse(data) : null;
    }
    async setPaginatedProducts(limit, offset, products) {
        const key = redis_keys_constants_1.REDIS_KEYS.PRODUCTS_PAGINATED(limit, offset);
        await this.redis.setKey(key, JSON.stringify(products));
    }
    async invalidateAllProductList() {
        const keys = await this.redis.getKeysMatching(redis_keys_constants_1.REDIS_KEYS.INVALIDATE_PRODUCT_ALL);
        for (const key of keys) {
            await this.redis.invalidateKey(key);
        }
    }
};
exports.ProductsCacheService = ProductsCacheService;
exports.ProductsCacheService = ProductsCacheService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [redis_service_1.RedisService])
], ProductsCacheService);
//# sourceMappingURL=products.cache.js.map