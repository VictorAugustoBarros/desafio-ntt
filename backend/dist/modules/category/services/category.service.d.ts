import { ICategoryService } from '../interfaces/category.service.interface';
import { CategoryDto } from '../dtos/category.dto';
import { FindCategoryByNameUseCase } from '../use-cases/find-category-by-name.use-case';
import { FindCategoryByUuidUseCase } from '../use-cases/find-category-by-id.use-case';
export declare class CategoryService implements ICategoryService {
    private readonly findCategoryByNameUseCase;
    private readonly findCategoryByUuidUseCase;
    constructor(findCategoryByNameUseCase: FindCategoryByNameUseCase, findCategoryByUuidUseCase: FindCategoryByUuidUseCase);
    getCategory({ name, uuid, }: {
        name: string;
        uuid: string;
    }): Promise<CategoryDto | null>;
}
