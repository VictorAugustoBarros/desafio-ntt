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
var UpdateProductUseCase_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductUseCase = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../shared/database/prisma.service");
const product_mapper_1 = require("../mapper/product.mapper");
let UpdateProductUseCase = UpdateProductUseCase_1 = class UpdateProductUseCase {
    prisma;
    logger = new common_1.Logger(UpdateProductUseCase_1.name);
    constructor(prisma) {
        this.prisma = prisma;
    }
    async execute(params) {
        const { uuid, name, description, price, categoryId } = params;
        try {
            const updatedProduct = await this.prisma.produto.update({
                where: { uuid },
                data: {
                    ...(name !== undefined && { name }),
                    ...(description !== undefined && { description }),
                    ...(price !== undefined && { price }),
                    ...(categoryId !== undefined && { categoryId }),
                },
                include: {
                    category: true,
                },
            });
            return (0, product_mapper_1.toProductDto)(updatedProduct);
        }
        catch (error) {
            this.logger.error('Erro ao atualizar produto', error.message);
            throw new common_1.InternalServerErrorException('Erro ao atualizar produto');
        }
    }
};
exports.UpdateProductUseCase = UpdateProductUseCase;
exports.UpdateProductUseCase = UpdateProductUseCase = UpdateProductUseCase_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UpdateProductUseCase);
//# sourceMappingURL=update-product.use-case.js.map