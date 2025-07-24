import { CreateProductRequest } from '../dto/create/create-product-request.dto';
import { CreateProductResponse } from '../dto/create/create-product-response.dto';
import { CreateProductUseCase } from '../use-cases/create-product.use-case';
import { ICategoryService } from 'src/modules/category/interfaces/category.service.interface';
import { RedisService } from 'src/shared/redis/redis.service';
export declare class CreateProductHandler {
    private readonly categoryService;
    private createProductUseCase;
    private redisService;
    constructor(categoryService: ICategoryService, createProductUseCase: CreateProductUseCase, redisService: RedisService);
    execute(request: CreateProductRequest): Promise<CreateProductResponse>;
}
