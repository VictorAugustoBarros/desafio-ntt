import { CreateCategoryRequest } from '../dtos/create/create-category-request.dto';
import { CreateCategoryResponse } from '../dtos/create/create-category-response.dto';
import { CreateCategoryUseCase } from '../use-cases/create-category.use-case';
import { ICategoryService } from '../interfaces/category.service.interface';
export declare class CreateCategoryHandler {
    private readonly categoryService;
    private createCategoryUseCase;
    constructor(categoryService: ICategoryService, createCategoryUseCase: CreateCategoryUseCase);
    execute(request: CreateCategoryRequest): Promise<CreateCategoryResponse>;
}
