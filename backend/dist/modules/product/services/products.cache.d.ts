import { RedisService } from 'src/shared/redis/redis.service';
import { ProductDto } from '../dto/product.dto';
export declare class ProductsCacheService {
    private readonly redis;
    constructor(redis: RedisService);
    getProduct(uuid: string): Promise<ProductDto | null>;
    setProduct(product: ProductDto): Promise<void>;
    invalidateProduct(uuid: string): Promise<void>;
    getProducts(): Promise<ProductDto[] | null>;
    setProducts(products: ProductDto[]): Promise<void>;
    getPaginatedProducts(limit: number, offset: number): Promise<ProductDto[] | null>;
    setPaginatedProducts(limit: number, offset: number, products: ProductDto[]): Promise<void>;
    invalidateAllProductList(): Promise<void>;
}
