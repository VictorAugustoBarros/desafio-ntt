import { UpdateCategoryRequest } from '../dtos/update/update-category-request.dto';
import { UpdateCategoryResponse } from '../dtos/update/update-category-response.dto';
import { UpdateCategoryUseCase } from '../use-cases/update-category.use-case';
import { ICategoryService } from '../interfaces/category.service.interface';
export declare class UpdateCategoryHandler {
    private updateCategoryUseCase;
    private readonly categoryService;
    constructor(updateCategoryUseCase: UpdateCategoryUseCase, categoryService: ICategoryService);
    execute(uuid: string, new_categoria: UpdateCategoryRequest): Promise<UpdateCategoryResponse>;
}
