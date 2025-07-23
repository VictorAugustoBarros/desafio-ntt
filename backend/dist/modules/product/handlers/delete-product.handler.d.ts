import { DeleteProductResponse } from '../dto/delete/delete-product-response.dto';
import { IProductService } from '../interfaces/product.service.interface';
import { DeleteProductUseCase } from '../use-cases/delete-product.use-case';
export declare class DeleteProductHandler {
    private readonly productService;
    private readonly deleteProductUseCase;
    constructor(productService: IProductService, deleteProductUseCase: DeleteProductUseCase);
    execute(uuid: string): Promise<DeleteProductResponse>;
}
