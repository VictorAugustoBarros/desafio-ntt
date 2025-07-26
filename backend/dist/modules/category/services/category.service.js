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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const find_category_by_name_use_case_1 = require("../use-cases/find-category-by-name.use-case");
const find_category_by_id_use_case_1 = require("../use-cases/find-category-by-id.use-case");
let CategoryService = class CategoryService {
    findCategoryByNameUseCase;
    findCategoryByUuidUseCase;
    constructor(findCategoryByNameUseCase, findCategoryByUuidUseCase) {
        this.findCategoryByNameUseCase = findCategoryByNameUseCase;
        this.findCategoryByUuidUseCase = findCategoryByUuidUseCase;
    }
    async getCategory({ name, uuid, }) {
        if (name) {
            return await this.findCategoryByNameUseCase.execute(name);
        }
        if (uuid) {
            return await this.findCategoryByUuidUseCase.execute(uuid);
        }
        return Promise.resolve(null);
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [find_category_by_name_use_case_1.FindCategoryByNameUseCase,
        find_category_by_id_use_case_1.FindCategoryByUuidUseCase])
], CategoryService);
//# sourceMappingURL=category.service.js.map