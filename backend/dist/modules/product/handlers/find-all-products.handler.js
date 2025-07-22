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
let FindAllProductsHandler = class FindAllProductsHandler {
    findAllProductsUseCase;
    constructor(findAllProductsUseCase) {
        this.findAllProductsUseCase = findAllProductsUseCase;
    }
    async execute() {
        const products = await this.findAllProductsUseCase.execute();
        return {
            products: products.map((product) => {
                return {
                    uuid: product.uuid,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    categoria: '',
                };
            }),
        };
    }
};
exports.FindAllProductsHandler = FindAllProductsHandler;
exports.FindAllProductsHandler = FindAllProductsHandler = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [find_all_products_use_case_1.FindAllProductsUseCase])
], FindAllProductsHandler);
//# sourceMappingURL=find-all-products.handler.js.map