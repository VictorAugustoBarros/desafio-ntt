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
exports.UpdateProductHandler = void 0;
const common_1 = require("@nestjs/common");
const product_constants_1 = require("../constants/product.constants");
const product_error_enum_1 = require("../exceptions/product-error.enum");
const product_exception_error_1 = require("../exceptions/product-exception.error");
const update_product_use_case_1 = require("../use-cases/update-product.use-case");
const category_constants_1 = require("../../category/constants/category.constants");
let UpdateProductHandler = class UpdateProductHandler {
    productService;
    categoryService;
    updateProductUseCase;
    constructor(productService, categoryService, updateProductUseCase) {
        this.productService = productService;
        this.categoryService = categoryService;
        this.updateProductUseCase = updateProductUseCase;
    }
    async execute(uuid, updateProduct) {
        const product = await this.productService.getProduct({
            uuid: uuid,
        });
        if (!product) {
            throw new product_exception_error_1.ProductExceptionError(product_error_enum_1.ProductErrorCode.PRODUCT_NOT_FOUND);
        }
        const params = {
            uuid: uuid,
            name: updateProduct.name,
            description: updateProduct.description,
            price: updateProduct.price,
        };
        if (updateProduct.categoryUuid) {
            const category = await this.categoryService.getCategory({
                uuid: updateProduct.categoryUuid,
            });
            if (!category) {
                throw new product_exception_error_1.ProductExceptionError(product_error_enum_1.ProductErrorCode.PRODUCT_CATEGORY_NOT_FOUND);
            }
            params.categoryId = category.id;
        }
        await this.updateProductUseCase.execute(params);
        return {
            message: 'Produto atualizada com sucesso',
        };
    }
};
exports.UpdateProductHandler = UpdateProductHandler;
exports.UpdateProductHandler = UpdateProductHandler = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(product_constants_1.IProductServiceToken)),
    __param(1, (0, common_1.Inject)(category_constants_1.ICategoryServiceToken)),
    __metadata("design:paramtypes", [Object, Object, update_product_use_case_1.UpdateProductUseCase])
], UpdateProductHandler);
//# sourceMappingURL=update-product.handler.js.map