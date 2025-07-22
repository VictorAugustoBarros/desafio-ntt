import { CreateCategoryRequest } from '../dtos/create/create-category-request.dto';
import { CreateCategoryResponse } from '../dtos/create/create-category-response.dto';
import { UpdateCategoryRequest } from '../dtos/update/update-category-request.dto';
import { CreateCategoryHandler } from '../handlers/create-category.handler';
import { DeleteCategoryResponse } from '../dtos/delete/delete-category-response.dto';
import { FindCategoryResponse } from '../dtos/find/find-category-response.dto';
import { UpdateCategoryResponse } from '../dtos/update/update-category-response.dto';
import { DeleteCategoryHandler } from '../handlers/delete-category.handler';
import { UpdateCategoryHandler } from '../handlers/update-category.handler';
import { FindCategoryHandler } from '../handlers/find-category.handler';
import { FindAllCategoriesResponse } from '../dtos/find/find-all-categories-response.dto';
import { FindAllCategoriesHandler } from '../handlers/find-all-categories.handler';
export declare class CategoryController {
    private readonly createCategoryHandler;
    private readonly findCategoryHandler;
    private readonly findAllCategoriesHandler;
    private readonly updateCategoryHandler;
    private readonly deleteCategoryHandler;
    constructor(createCategoryHandler: CreateCategoryHandler, findCategoryHandler: FindCategoryHandler, findAllCategoriesHandler: FindAllCategoriesHandler, updateCategoryHandler: UpdateCategoryHandler, deleteCategoryHandler: DeleteCategoryHandler);
    findAll(): Promise<FindAllCategoriesResponse>;
    findById(uuid: string): Promise<FindCategoryResponse>;
    create(request: CreateCategoryRequest): Promise<CreateCategoryResponse>;
    update(uuid: string, request: UpdateCategoryRequest): Promise<UpdateCategoryResponse>;
    delete(uuid: string): Promise<DeleteCategoryResponse>;
}
