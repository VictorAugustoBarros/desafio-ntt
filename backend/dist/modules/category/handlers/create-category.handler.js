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
exports.CreateCategoryHandler = void 0;
const common_1 = require("@nestjs/common");
const category_exception_error_1 = require("../exceptions/category-exception.error");
const category_error_enum_1 = require("../exceptions/category-error.enum");
const create_category_use_case_1 = require("../use-cases/create-category.use-case");
const category_constants_1 = require("../constants/category.constants");
let CreateCategoryHandler = class CreateCategoryHandler {
    categoryService;
    createCategoryUseCase;
    constructor(categoryService, createCategoryUseCase) {
        this.categoryService = categoryService;
        this.createCategoryUseCase = createCategoryUseCase;
    }
    async execute(request) {
        const categoryExists = await this.categoryService.getCategory({
            name: request.name,
        });
        if (categoryExists) {
            throw new category_exception_error_1.CategoryExceptionError(category_error_enum_1.CategoryErrorCode.CATEGORY_ALREADY_EXISTS);
        }
        const category = await this.createCategoryUseCase.execute(request.name);
        return {
            message: 'Category criada com sucesso',
            uuid: String(category.uuid),
        };
    }
};
exports.CreateCategoryHandler = CreateCategoryHandler;
exports.CreateCategoryHandler = CreateCategoryHandler = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(category_constants_1.ICategoryServiceToken)),
    __metadata("design:paramtypes", [Object, create_category_use_case_1.CreateCategoryUseCase])
], CreateCategoryHandler);
//# sourceMappingURL=create-category.handler.js.map