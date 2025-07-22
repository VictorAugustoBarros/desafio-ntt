import { UpdateProductRequest } from '../dto/update/update-product-request.dto';
import { UpdateProductResponse } from '../dto/update/update-product-response.dto';
import { IProductService } from '../interfaces/product.service.interface';
export declare class UpdateProductHandler {
    private readonly categoryService;
    constructor(categoryService: IProductService);
    execute(uuid: string, new_categoria: UpdateProductRequest): Promise<UpdateProductResponse>;
}
