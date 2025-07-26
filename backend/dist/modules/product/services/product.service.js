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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const find_product_by_id_use_case_1 = require("../use-cases/find-product-by-id.use-case");
const find_product_by_name_use_case_1 = require("../use-cases/find-product-by-name.use-case");
let ProductService = class ProductService {
    findProductByUuidUseCase;
    findProductByNameUseCase;
    constructor(findProductByUuidUseCase, findProductByNameUseCase) {
        this.findProductByUuidUseCase = findProductByUuidUseCase;
        this.findProductByNameUseCase = findProductByNameUseCase;
    }
    async getProduct({ name, uuid, }) {
        if (name) {
            return await this.findProductByNameUseCase.execute(name);
        }
        if (uuid) {
            return await this.findProductByUuidUseCase.execute(uuid);
        }
        return Promise.resolve(null);
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [find_product_by_id_use_case_1.FindProductByUuidUseCase,
        find_product_by_name_use_case_1.FindProductByNameUseCase])
], ProductService);
//# sourceMappingURL=product.service.js.map