import { DeleteProductResponse } from '../dto/delete/delete-product-response.dto';
import { IProductService } from '../interfaces/product.service.interface';
import { DeleteProductUseCase } from '../use-cases/delete-product.use-case';
import { ProductsCacheService } from '../services/products.cache';
export declare class DeleteProductHandler {
    private readonly productService;
    private readonly deleteProductUseCase;
    private readonly productsCache;
    constructor(productService: IProductService, deleteProductUseCase: DeleteProductUseCase, productsCache: ProductsCacheService);
    execute(uuid: string): Promise<DeleteProductResponse>;
}
