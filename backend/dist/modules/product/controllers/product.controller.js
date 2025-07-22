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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const product_exception_filter_1 = require("../exceptions/product-exception.filter");
const find_all_products_handler_1 = require("../handlers/find-all-products.handler");
const find_all_products_response_dto_1 = require("../dto/find/find-all-products-response.dto");
const create_product_request_dto_1 = require("../dto/create/create-product-request.dto");
const create_product_response_dto_1 = require("../dto/create/create-product-response.dto");
const create_product_handler_1 = require("../handlers/create-product.handler");
const find_product_response_dto_1 = require("../dto/find/find-product-response.dto");
const find_product_handler_1 = require("../handlers/find-product.handler");
const delete_product_response_dto_1 = require("../dto/delete/delete-product-response.dto");
const update_product_request_dto_1 = require("../dto/update/update-product-request.dto");
const update_product_response_dto_1 = require("../dto/update/update-product-response.dto");
const delete_product_handler_1 = require("../handlers/delete-product.handler");
const update_product_handler_1 = require("../handlers/update-product.handler");
let ProductController = class ProductController {
    findAllProductsHandler;
    createProductHandler;
    findProductHandler;
    updateProductHandler;
    deleteProductHandler;
    constructor(findAllProductsHandler, createProductHandler, findProductHandler, updateProductHandler, deleteProductHandler) {
        this.findAllProductsHandler = findAllProductsHandler;
        this.createProductHandler = createProductHandler;
        this.findProductHandler = findProductHandler;
        this.updateProductHandler = updateProductHandler;
        this.deleteProductHandler = deleteProductHandler;
    }
    findAll() {
        return this.findAllProductsHandler.execute();
    }
    findByUuid(uuid) {
        return this.findProductHandler.execute(uuid);
    }
    create(request) {
        return this.createProductHandler.execute(request);
    }
    update(uuid, request) {
        return this.updateProductHandler.execute(uuid, request);
    }
    delete(uuid) {
        return this.deleteProductHandler.execute(uuid);
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Fetch all products' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of products',
        type: find_all_products_response_dto_1.FindAllProductsResponse,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':uuid'),
    (0, swagger_1.ApiOperation)({ summary: 'Fetch a product by UUID' }),
    (0, swagger_1.ApiParam)({
        name: 'uuid',
        description: 'Product UUID',
        example: 'd0e08ad3-5c72-4b50-90f9-0f5d6851c0d2',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Product successfully found',
        type: find_product_response_dto_1.FindProductResponse,
    }),
    __param(0, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findByUuid", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new product' }),
    (0, swagger_1.ApiBody)({
        description: 'Product information',
        type: create_product_request_dto_1.CreateProductRequest,
        examples: {
            example: {
                summary: 'Simple example',
                value: {
                    name: 'Test product',
                    description: 'Product description',
                    price: 10.5,
                    categoryUuid: 'be9c7882-ad24-400b-a48c-4a5ea7a3276c',
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Product created successfully',
        type: create_product_response_dto_1.CreateProductResponse,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_request_dto_1.CreateProductRequest]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':uuid'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an existing product' }),
    (0, swagger_1.ApiParam)({
        name: 'uuid',
        description: 'Product UUID',
        example: 'd0e08ad3-5c72-4b50-90f9-0f5d6851c0d2',
    }),
    (0, swagger_1.ApiBody)({
        description: 'Product update data',
        type: update_product_request_dto_1.UpdateProductRequest,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Product updated successfully',
        type: update_product_response_dto_1.UpdateProductResponse,
    }),
    __param(0, (0, common_1.Param)('uuid')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_request_dto_1.UpdateProductRequest]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':uuid'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a product by UUID' }),
    (0, swagger_1.ApiParam)({
        name: 'uuid',
        description: 'Product UUID',
        example: 'd0e08ad3-5c72-4b50-90f9-0f5d6851c0d2',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Product deleted successfully',
        type: delete_product_response_dto_1.DeleteProductResponse,
    }),
    __param(0, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "delete", null);
exports.ProductController = ProductController = __decorate([
    (0, swagger_1.ApiTags)('Products'),
    (0, common_1.Controller)('products'),
    (0, common_1.UseFilters)(product_exception_filter_1.ProductExceptionFilter),
    __metadata("design:paramtypes", [find_all_products_handler_1.FindAllProductsHandler,
        create_product_handler_1.CreateProductHandler,
        find_product_handler_1.FindProductHandler,
        update_product_handler_1.UpdateProductHandler,
        delete_product_handler_1.DeleteProductHandler])
], ProductController);
//# sourceMappingURL=product.controller.js.map