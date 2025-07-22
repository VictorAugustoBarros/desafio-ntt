import { IProductService } from '../interfaces/product.service.interface';
import { FindProductResponse } from '../dto/find/find-product-response.dto';
export declare class FindProductHandler {
    private readonly productService;
    constructor(productService: IProductService);
    execute(uuid: string): Promise<FindProductResponse>;
}
