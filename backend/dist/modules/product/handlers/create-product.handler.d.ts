import { CreateProductRequest } from '../dto/create/create-product-request.dto';
import { CreateProductResponse } from '../dto/create/create-product-response.dto';
import { CreateProductUseCase } from '../use-cases/create-product.use-case';
import { ICategoryService } from 'src/modules/category/interfaces/category.service.interface';
import { ProductsCacheService } from '../services/products.cache';
export declare class CreateProductHandler {
    private readonly categoryService;
    private createProductUseCase;
    private readonly productsCache;
    constructor(categoryService: ICategoryService, createProductUseCase: CreateProductUseCase, productsCache: ProductsCacheService);
    execute(request: CreateProductRequest): Promise<CreateProductResponse>;
}
