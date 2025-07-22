import { CategoryDto } from '../category.dto';
export declare class FindAllCategoriesResponse {
    categorias: Omit<CategoryDto, 'id'>[];
}
