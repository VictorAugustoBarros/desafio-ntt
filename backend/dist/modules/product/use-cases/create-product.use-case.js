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
var CreateProductUseCase_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductUseCase = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../shared/database/prisma.service");
const product_mapper_1 = require("../mapper/product.mapper");
let CreateProductUseCase = CreateProductUseCase_1 = class CreateProductUseCase {
    prisma;
    logger = new common_1.Logger(CreateProductUseCase_1.name);
    constructor(prisma) {
        this.prisma = prisma;
    }
    async execute(name, description, price, categoryId) {
        try {
            const categoryDB = await this.prisma.produto.create({
                data: {
                    name,
                    description,
                    price,
                    categoryId,
                },
            });
            return (0, product_mapper_1.toProductDto)(categoryDB);
        }
        catch (error) {
            this.logger.error('Erro ao criar produto', error.message);
            throw new common_1.InternalServerErrorException('Erro ao criar produto');
        }
    }
};
exports.CreateProductUseCase = CreateProductUseCase;
exports.CreateProductUseCase = CreateProductUseCase = CreateProductUseCase_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CreateProductUseCase);
//# sourceMappingURL=create-product.use-case.js.map