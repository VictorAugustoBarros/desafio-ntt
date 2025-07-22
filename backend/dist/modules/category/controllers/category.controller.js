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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const create_category_request_dto_1 = require("../dtos/create/create-category-request.dto");
const create_category_response_dto_1 = require("../dtos/create/create-category-response.dto");
const update_category_request_dto_1 = require("../dtos/update/update-category-request.dto");
const create_category_handler_1 = require("../handlers/create-category.handler");
const swagger_1 = require("@nestjs/swagger");
const category_exception_filter_1 = require("../exceptions/category-exception.filter");
const delete_category_response_dto_1 = require("../dtos/delete/delete-category-response.dto");
const find_category_response_dto_1 = require("../dtos/find/find-category-response.dto");
const update_category_response_dto_1 = require("../dtos/update/update-category-response.dto");
const delete_category_handler_1 = require("../handlers/delete-category.handler");
const update_category_handler_1 = require("../handlers/update-category.handler");
const find_category_handler_1 = require("../handlers/find-category.handler");
const find_all_categories_response_dto_1 = require("../dtos/find/find-all-categories-response.dto");
const find_all_categories_handler_1 = require("../handlers/find-all-categories.handler");
let CategoryController = class CategoryController {
    createCategoryHandler;
    findCategoryHandler;
    findAllCategoriesHandler;
    updateCategoryHandler;
    deleteCategoryHandler;
    constructor(createCategoryHandler, findCategoryHandler, findAllCategoriesHandler, updateCategoryHandler, deleteCategoryHandler) {
        this.createCategoryHandler = createCategoryHandler;
        this.findCategoryHandler = findCategoryHandler;
        this.findAllCategoriesHandler = findAllCategoriesHandler;
        this.updateCategoryHandler = updateCategoryHandler;
        this.deleteCategoryHandler = deleteCategoryHandler;
    }
    findAll() {
        return this.findAllCategoriesHandler.execute();
    }
    findById(uuid) {
        return this.findCategoryHandler.execute(uuid);
    }
    create(request) {
        return this.createCategoryHandler.execute(request);
    }
    update(uuid, request) {
        return this.updateCategoryHandler.execute(uuid, request);
    }
    delete(uuid) {
        return this.deleteCategoryHandler.execute(uuid);
    }
};
exports.CategoryController = CategoryController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Fetch all categories' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of category',
        type: find_all_categories_response_dto_1.FindAllCategoriesResponse,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':uuid'),
    (0, swagger_1.ApiOperation)({ summary: 'Fetch a category by UUID' }),
    (0, swagger_1.ApiParam)({
        name: 'uuid',
        description: 'Category UUID',
        example: '76c81ac4-c2df-4f38-81c4-fa7e56625606',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Category successfully found',
        type: find_category_response_dto_1.FindCategoryResponse,
    }),
    __param(0, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new category' }),
    (0, swagger_1.ApiBody)({
        description: 'Category information',
        type: create_category_request_dto_1.CreateCategoryRequest,
        examples: {
            example: {
                summary: 'Simple example',
                value: {
                    name: 'Test category',
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Category created successfully',
        type: create_category_response_dto_1.CreateCategoryResponse,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_category_request_dto_1.CreateCategoryRequest]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':uuid'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an existing category' }),
    (0, swagger_1.ApiParam)({
        name: 'uuid',
        description: 'Category UUID',
        example: '76c81ac4-c2df-4f38-81c4-fa7e56625606',
    }),
    (0, swagger_1.ApiBody)({
        description: 'Category update data',
        type: update_category_request_dto_1.UpdateCategoryRequest,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Category updated successfully',
        type: update_category_response_dto_1.UpdateCategoryResponse,
    }),
    __param(0, (0, common_1.Param)('uuid')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_category_request_dto_1.UpdateCategoryRequest]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':uuid'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a category by UUID' }),
    (0, swagger_1.ApiParam)({
        name: 'uuid',
        description: 'Category UUID',
        example: '76c81ac4-c2df-4f38-81c4-fa7e56625606',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Category deleted successfully',
        type: delete_category_response_dto_1.DeleteCategoryResponse,
    }),
    __param(0, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "delete", null);
exports.CategoryController = CategoryController = __decorate([
    (0, swagger_1.ApiTags)('Categories'),
    (0, common_1.Controller)('categories'),
    (0, common_1.UseFilters)(category_exception_filter_1.CategoryExceptionFilter),
    __metadata("design:paramtypes", [create_category_handler_1.CreateCategoryHandler,
        find_category_handler_1.FindCategoryHandler,
        find_all_categories_handler_1.FindAllCategoriesHandler,
        update_category_handler_1.UpdateCategoryHandler,
        delete_category_handler_1.DeleteCategoryHandler])
], CategoryController);
//# sourceMappingURL=category.controller.js.map