import { DeleteProductResponse } from '../dto/delete/delete-product-response.dto';
import { IProductService } from '../interfaces/product.service.interface';
export declare class DeleteProductHandler {
    private readonly productService;
    constructor(productService: IProductService);
    execute(uuid: string): Promise<DeleteProductResponse>;
}
