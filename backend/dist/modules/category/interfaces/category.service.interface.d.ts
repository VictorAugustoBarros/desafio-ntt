import { CategoryDto } from '../dtos/category.dto';
export interface ICategoryService {
    getCategory(params: {
        name?: string;
        uuid?: string;
    }): Promise<CategoryDto | null>;
}
