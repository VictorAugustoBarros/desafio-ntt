import { ProductDto } from '../dto/product.dto';
export interface IProductService {
    getProduct(params: {
        name?: string;
        uuid?: string;
    }): Promise<ProductDto | null>;
}
