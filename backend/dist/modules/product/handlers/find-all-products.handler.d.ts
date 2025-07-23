import { FindAllProductsUseCase } from '../use-cases/find-all-products.use-case';
import { FindAllProductsResponse } from '../dto/find/find-all-products-response.dto';
import { RedisService } from 'src/shared/redis/redis.service';
export declare class FindAllProductsHandler {
    private findAllProductsUseCase;
    private redisService;
    private readonly cacheKey;
    constructor(findAllProductsUseCase: FindAllProductsUseCase, redisService: RedisService);
    execute(): Promise<FindAllProductsResponse>;
}
