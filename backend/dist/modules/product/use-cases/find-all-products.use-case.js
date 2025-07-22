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
var FindAllProductsUseCase_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllProductsUseCase = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../shared/database/prisma.service");
const product_mapper_1 = require("../mapper/product.mapper");
let FindAllProductsUseCase = FindAllProductsUseCase_1 = class FindAllProductsUseCase {
    prisma;
    logger = new common_1.Logger(FindAllProductsUseCase_1.name);
    constructor(prisma) {
        this.prisma = prisma;
    }
    async execute() {
        try {
            const productsDB = await this.prisma.produto.findMany({});
            return productsDB.map((productDB) => {
                return (0, product_mapper_1.toProductDto)(productDB);
            });
        }
        catch (error) {
            this.logger.error('Erro ao buscar produtos', error.message);
            throw new common_1.InternalServerErrorException('Erro ao buscar produtos');
        }
    }
};
exports.FindAllProductsUseCase = FindAllProductsUseCase;
exports.FindAllProductsUseCase = FindAllProductsUseCase = FindAllProductsUseCase_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FindAllProductsUseCase);
//# sourceMappingURL=find-all-products.use-case.js.map