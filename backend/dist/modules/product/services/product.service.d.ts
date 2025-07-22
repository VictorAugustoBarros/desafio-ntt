import { IProductService } from '../interfaces/product.service.interface';
import { ProductDto } from '../dto/product.dto';
import { FindProductByUuidUseCase } from '../use-cases/find-product-by-id.use-case';
import { FindProductByNameUseCase } from '../use-cases/find-product-by-name.use-case';
export declare class ProductService implements IProductService {
    private readonly findProductByUuidUseCase;
    private readonly findProductByNameUseCase;
    constructor(findProductByUuidUseCase: FindProductByUuidUseCase, findProductByNameUseCase: FindProductByNameUseCase);
    getProduct({ name, uuid, }: {
        name: string;
        uuid: string;
    }): Promise<ProductDto | null>;
}
