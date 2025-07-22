import { CreateProductRequest } from '../dto/create/create-product-request.dto';
import { CreateProductResponse } from '../dto/create/create-product-response.dto';
import { CreateProductUseCase } from '../use-cases/create-product.use-case';
import { ICategoryService } from 'src/modules/category/interfaces/category.service.interface';
export declare class CreateProductHandler {
    private readonly categoryService;
    private createProductUseCase;
    constructor(categoryService: ICategoryService, createProductUseCase: CreateProductUseCase);
    execute(request: CreateProductRequest): Promise<CreateProductResponse>;
}
