"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModule = void 0;
const common_1 = require("@nestjs/common");
const category_controller_1 = require("./controllers/category.controller");
const create_category_use_case_1 = require("./use-cases/create-category.use-case");
const create_category_handler_1 = require("./handlers/create-category.handler");
const shared_module_1 = require("../../shared/shared.module");
const find_category_by_name_use_case_1 = require("./use-cases/find-category-by-name.use-case");
const find_category_handler_1 = require("./handlers/find-category.handler");
const find_category_by_id_use_case_1 = require("./use-cases/find-category-by-id.use-case");
const update_category_handler_1 = require("./handlers/update-category.handler");
const delete_category_handler_1 = require("./handlers/delete-category.handler");
const delete_category_use_case_1 = require("./use-cases/delete-category.use-case");
const update_category_use_case_1 = require("./use-cases/update-category.use-case");
const find_all_categories_handler_1 = require("./handlers/find-all-categories.handler");
const find_all_categorys_use_case_1 = require("./use-cases/find-all-categorys.use-case");
const category_constants_1 = require("./constants/category.constants");
const category_service_1 = require("./services/category.service");
let CategoryModule = class CategoryModule {
};
exports.CategoryModule = CategoryModule;
exports.CategoryModule = CategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [shared_module_1.SharedModule],
        controllers: [category_controller_1.CategoryController],
        providers: [
            find_category_handler_1.FindCategoryHandler,
            create_category_handler_1.CreateCategoryHandler,
            update_category_handler_1.UpdateCategoryHandler,
            delete_category_handler_1.DeleteCategoryHandler,
            find_all_categories_handler_1.FindAllCategoriesHandler,
            find_category_by_name_use_case_1.FindCategoryByNameUseCase,
            find_category_by_id_use_case_1.FindCategoryByUuidUseCase,
            create_category_use_case_1.CreateCategoryUseCase,
            delete_category_use_case_1.DeleteCategoryUseCase,
            update_category_use_case_1.UpdateCategoryUseCase,
            find_all_categorys_use_case_1.FindAllCategoriesUseCase,
            {
                provide: category_constants_1.ICategoryServiceToken,
                useClass: category_service_1.CategoryService,
            },
        ],
        exports: [category_constants_1.ICategoryServiceToken],
    })
], CategoryModule);
//# sourceMappingURL=category.module.js.map