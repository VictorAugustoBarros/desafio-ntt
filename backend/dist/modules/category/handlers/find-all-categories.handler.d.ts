import { FindAllCategoriesResponse } from '../dtos/find/find-all-categories-response.dto';
import { FindAllCategoriesUseCase } from '../use-cases/find-all-categorys.use-case';
export declare class FindAllCategoriesHandler {
    private findAllCategoriesUseCase;
    constructor(findAllCategoriesUseCase: FindAllCategoriesUseCase);
    execute(): Promise<FindAllCategoriesResponse>;
}
