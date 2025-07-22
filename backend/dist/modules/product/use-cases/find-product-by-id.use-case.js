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
var FindProductByUuidUseCase_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindProductByUuidUseCase = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../shared/database/prisma.service");
const product_mapper_1 = require("../mapper/product.mapper");
let FindProductByUuidUseCase = FindProductByUuidUseCase_1 = class FindProductByUuidUseCase {
    prisma;
    logger = new common_1.Logger(FindProductByUuidUseCase_1.name);
    constructor(prisma) {
        this.prisma = prisma;
    }
    async execute(uuid) {
        try {
            const productDB = await this.prisma.produto.findFirst({
                where: { uuid },
            });
            if (!productDB) {
                return null;
            }
            return (0, product_mapper_1.toProductDto)(productDB);
        }
        catch (error) {
            this.logger.error('Erro ao buscar produt por uuid', error.message);
            throw new common_1.InternalServerErrorException('Erro ao buscar produt por uuid');
        }
    }
};
exports.FindProductByUuidUseCase = FindProductByUuidUseCase;
exports.FindProductByUuidUseCase = FindProductByUuidUseCase = FindProductByUuidUseCase_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FindProductByUuidUseCase);
//# sourceMappingURL=find-product-by-id.use-case.js.map