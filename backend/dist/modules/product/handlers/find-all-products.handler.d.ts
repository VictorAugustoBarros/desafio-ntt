import { FindAllProductsUseCase } from '../use-cases/find-all-products.use-case';
import { FindAllProductsResponse } from '../dto/find/find-all-products-response.dto';
export declare class FindAllProductsHandler {
    private findAllProductsUseCase;
    constructor(findAllProductsUseCase: FindAllProductsUseCase);
    execute(): Promise<FindAllProductsResponse>;
}
