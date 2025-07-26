import { UpdateProductRequest } from '../dto/update/update-product-request.dto';
import { UpdateProductResponse } from '../dto/update/update-product-response.dto';
import { IProductService } from '../interfaces/product.service.interface';
import { UpdateProductUseCase } from '../use-cases/update-product.use-case';
import { ICategoryService } from 'src/modules/category/interfaces/category.service.interface';
import { ProductsCacheService } from '../services/products.cache';
export declare class UpdateProductHandler {
    private readonly productService;
    private readonly categoryService;
    private readonly updateProductUseCase;
    private readonly productsCache;
    constructor(productService: IProductService, categoryService: ICategoryService, updateProductUseCase: UpdateProductUseCase, productsCache: ProductsCacheService);
    execute(uuid: string, updateProduct: UpdateProductRequest): Promise<UpdateProductResponse>;
}
