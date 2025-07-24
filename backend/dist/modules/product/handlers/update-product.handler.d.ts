import { UpdateProductRequest } from '../dto/update/update-product-request.dto';
import { UpdateProductResponse } from '../dto/update/update-product-response.dto';
import { IProductService } from '../interfaces/product.service.interface';
import { UpdateProductUseCase } from '../use-cases/update-product.use-case';
import { ICategoryService } from 'src/modules/category/interfaces/category.service.interface';
import { RedisService } from 'src/shared/redis/redis.service';
export declare class UpdateProductHandler {
    private readonly productService;
    private readonly categoryService;
    private readonly updateProductUseCase;
    private readonly redisService;
    constructor(productService: IProductService, categoryService: ICategoryService, updateProductUseCase: UpdateProductUseCase, redisService: RedisService);
    execute(uuid: string, updateProduct: UpdateProductRequest): Promise<UpdateProductResponse>;
}
