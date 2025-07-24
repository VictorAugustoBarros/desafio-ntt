import { CategoryDto } from '../category.dto';
export declare class FindAllCategoriesResponse {
    categories: Omit<CategoryDto, 'id'>[];
}
