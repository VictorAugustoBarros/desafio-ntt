import { FindAllProductsUseCase } from '../use-cases/find-all-products.use-case';
import { FindAllProductsResponse } from '../dto/find/find-all-products-response.dto';
import { RedisService } from 'src/shared/redis/redis.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';
export declare class FindAllProductsHandler {
    private findAllProductsUseCase;
    private redisService;
    constructor(findAllProductsUseCase: FindAllProductsUseCase, redisService: RedisService);
    execute(paginationDto: PaginationDto): Promise<FindAllProductsResponse>;
}
