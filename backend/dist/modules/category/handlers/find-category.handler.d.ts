import { FindCategoryResponse } from '../dtos/find/find-category-response.dto';
import { ICategoryService } from '../interfaces/category.service.interface';
export declare class FindCategoryHandler {
    private readonly categoryService;
    constructor(categoryService: ICategoryService);
    execute(uuid: string): Promise<FindCategoryResponse>;
}
