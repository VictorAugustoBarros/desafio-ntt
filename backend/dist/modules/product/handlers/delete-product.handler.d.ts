import { DeleteProductResponse } from '../dto/delete/delete-product-response.dto';
import { IProductService } from '../interfaces/product.service.interface';
import { DeleteProductUseCase } from '../use-cases/delete-product.use-case';
import { RedisService } from 'src/shared/redis/redis.service';
export declare class DeleteProductHandler {
    private readonly productService;
    private readonly deleteProductUseCase;
    private readonly redisService;
    constructor(productService: IProductService, deleteProductUseCase: DeleteProductUseCase, redisService: RedisService);
    execute(uuid: string): Promise<DeleteProductResponse>;
}
