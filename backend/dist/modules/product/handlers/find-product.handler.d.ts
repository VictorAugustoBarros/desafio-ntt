import { IProductService } from '../interfaces/product.service.interface';
import { FindProductResponse } from '../dto/find/find-product-response.dto';
import { ProductsCacheService } from '../services/products.cache';
export declare class FindProductHandler {
    private readonly productService;
    private readonly productsCache;
    constructor(productService: IProductService, productsCache: ProductsCacheService);
    execute(uuid: string): Promise<FindProductResponse>;
}
