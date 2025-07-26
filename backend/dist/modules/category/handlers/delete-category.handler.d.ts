import { DeleteCategoryResponse } from '../dtos/delete/delete-category-response.dto';
import { DeleteCategoryUseCase } from '../use-cases/delete-category.use-case';
import { ICategoryService } from '../interfaces/category.service.interface';
export declare class DeleteCategoryHandler {
    private readonly categoryService;
    private deleteCategoryUseCase;
    constructor(categoryService: ICategoryService, deleteCategoryUseCase: DeleteCategoryUseCase);
    execute(uuid: string): Promise<DeleteCategoryResponse>;
}
