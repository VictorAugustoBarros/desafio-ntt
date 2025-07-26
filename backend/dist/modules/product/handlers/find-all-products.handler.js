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
const products_cache_1 = require("../services/products.cache");
let FindAllProductsHandler = class FindAllProductsHandler {
    findAllProductsUseCase;
    productsCache;
    constructor(findAllProductsUseCase, productsCache) {
        this.findAllProductsUseCase = findAllProductsUseCase;
        this.productsCache = productsCache;
    }
    async execute(paginationDto) {
        const { limit, offset } = paginationDto;
        let cachedProducts = null;
        if (limit && offset) {
            cachedProducts = await this.productsCache.getPaginatedProducts(limit, offset);
        }
        else {
            cachedProducts = await this.productsCache.getProducts();
        }
        if (cachedProducts) {
            return { products: cachedProducts };
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
        if (limit && offset) {
            await this.productsCache.setPaginatedProducts(limit, offset, products);
        }
        else {
            await this.productsCache.setProducts(products);
        }
        return response;
    }
};
exports.FindAllProductsHandler = FindAllProductsHandler;
exports.FindAllProductsHandler = FindAllProductsHandler = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [find_all_products_use_case_1.FindAllProductsUseCase,
        products_cache_1.ProductsCacheService])
], FindAllProductsHandler);
//# sourceMappingURL=find-all-products.handler.js.map