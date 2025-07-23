"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const common_1 = require("@nestjs/common");
const product_controller_1 = require("./controllers/product.controller");
const shared_module_1 = require("../../shared/shared.module");
const find_all_products_handler_1 = require("./handlers/find-all-products.handler");
const find_all_products_use_case_1 = require("./use-cases/find-all-products.use-case");
const create_product_use_case_1 = require("./use-cases/create-product.use-case");
const create_product_handler_1 = require("./handlers/create-product.handler");
const category_module_1 = require("../category/category.module");
const update_product_handler_1 = require("./handlers/update-product.handler");
const delete_product_handler_1 = require("./handlers/delete-product.handler");
const product_constants_1 = require("./constants/product.constants");
const product_service_1 = require("./services/product.service");
const find_product_handler_1 = require("./handlers/find-product.handler");
const find_product_by_name_use_case_1 = require("./use-cases/find-product-by-name.use-case");
const find_product_by_id_use_case_1 = require("./use-cases/find-product-by-id.use-case");
const delete_product_use_case_1 = require("./use-cases/delete-product.use-case");
const update_product_use_case_1 = require("./use-cases/update-product.use-case");
let ProductModule = class ProductModule {
};
exports.ProductModule = ProductModule;
exports.ProductModule = ProductModule = __decorate([
    (0, common_1.Module)({
        imports: [shared_module_1.SharedModule, category_module_1.CategoryModule],
        controllers: [product_controller_1.ProductController],
        providers: [
            find_all_products_handler_1.FindAllProductsHandler,
            find_product_handler_1.FindProductHandler,
            create_product_handler_1.CreateProductHandler,
            update_product_handler_1.UpdateProductHandler,
            delete_product_handler_1.DeleteProductHandler,
            find_all_products_use_case_1.FindAllProductsUseCase,
            create_product_use_case_1.CreateProductUseCase,
            find_product_by_name_use_case_1.FindProductByNameUseCase,
            find_product_by_id_use_case_1.FindProductByUuidUseCase,
            update_product_use_case_1.UpdateProductUseCase,
            delete_product_use_case_1.DeleteProductUseCase,
            {
                provide: product_constants_1.IProductServiceToken,
                useClass: product_service_1.ProductService,
            },
        ],
    })
], ProductModule);
//# sourceMappingURL=product.module.js.map