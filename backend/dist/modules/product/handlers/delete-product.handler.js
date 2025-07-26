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
exports.DeleteProductHandler = void 0;
const common_1 = require("@nestjs/common");
const product_constants_1 = require("../constants/product.constants");
const product_exception_error_1 = require("../exceptions/product-exception.error");
const product_error_enum_1 = require("../exceptions/product-error.enum");
const delete_product_use_case_1 = require("../use-cases/delete-product.use-case");
const products_cache_1 = require("../services/products.cache");
let DeleteProductHandler = class DeleteProductHandler {
    productService;
    deleteProductUseCase;
    productsCache;
    constructor(productService, deleteProductUseCase, productsCache) {
        this.productService = productService;
        this.deleteProductUseCase = deleteProductUseCase;
        this.productsCache = productsCache;
    }
    async execute(uuid) {
        const product = await this.productService.getProduct({
            uuid: uuid,
        });
        if (!product) {
            throw new product_exception_error_1.ProductExceptionError(product_error_enum_1.ProductErrorCode.PRODUCT_NOT_FOUND);
        }
        await this.deleteProductUseCase.execute(uuid);
        await this.productsCache.invalidateProduct(uuid);
        await this.productsCache.invalidateAllProductList();
        return {
            message: 'Produto deletado com sucesso',
        };
    }
};
exports.DeleteProductHandler = DeleteProductHandler;
exports.DeleteProductHandler = DeleteProductHandler = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(product_constants_1.IProductServiceToken)),
    __metadata("design:paramtypes", [Object, delete_product_use_case_1.DeleteProductUseCase,
        products_cache_1.ProductsCacheService])
], DeleteProductHandler);
//# sourceMappingURL=delete-product.handler.js.map