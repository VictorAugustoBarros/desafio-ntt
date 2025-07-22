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
var FindAllCategoriesUseCase_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllCategoriesUseCase = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../shared/database/prisma.service");
const calendar_mapper_1 = require("../mapper/calendar.mapper");
let FindAllCategoriesUseCase = FindAllCategoriesUseCase_1 = class FindAllCategoriesUseCase {
    prisma;
    logger = new common_1.Logger(FindAllCategoriesUseCase_1.name);
    constructor(prisma) {
        this.prisma = prisma;
    }
    async execute() {
        try {
            const categoriesDB = await this.prisma.categoria.findMany({});
            return categoriesDB.map((categoryDB) => {
                return (0, calendar_mapper_1.toCategoryDto)(categoryDB);
            });
        }
        catch (error) {
            this.logger.error('Erro ao buscar categorias', error.message);
            throw new common_1.InternalServerErrorException('Erro ao buscar categorias');
        }
    }
};
exports.FindAllCategoriesUseCase = FindAllCategoriesUseCase;
exports.FindAllCategoriesUseCase = FindAllCategoriesUseCase = FindAllCategoriesUseCase_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FindAllCategoriesUseCase);
//# sourceMappingURL=find-all-categorys.use-case.js.map