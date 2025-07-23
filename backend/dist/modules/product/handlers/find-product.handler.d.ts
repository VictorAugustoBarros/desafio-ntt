import { IProductService } from '../interfaces/product.service.interface';
import { FindProductResponse } from '../dto/find/find-product-response.dto';
import { RedisService } from 'src/shared/redis/redis.service';
export declare class FindProductHandler {
    private readonly productService;
    private redisService;
    constructor(productService: IProductService, redisService: RedisService);
    private getCacheKey;
    execute(uuid: string): Promise<FindProductResponse>;
}
