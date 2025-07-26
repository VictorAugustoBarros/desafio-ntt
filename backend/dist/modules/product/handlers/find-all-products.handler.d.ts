import { FindAllProductsUseCase } from '../use-cases/find-all-products.use-case';
import { FindAllProductsResponse } from '../dto/find/find-all-products-response.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { ProductsCacheService } from '../services/products.cache';
export declare class FindAllProductsHandler {
    private readonly findAllProductsUseCase;
    private readonly productsCache;
    constructor(findAllProductsUseCase: FindAllProductsUseCase, productsCache: ProductsCacheService);
    execute(paginationDto: PaginationDto): Promise<FindAllProductsResponse>;
}
