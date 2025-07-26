import { Injectable } from '@nestjs/common';
import { REDIS_KEYS } from 'src/shared/redis/constants/redis-keys.constants';
import { RedisService } from 'src/shared/redis/redis.service';
import { ProductDto } from '../dto/product.dto';

@Injectable()
export class ProductsCacheService {
  constructor(private readonly redis: RedisService) {}

  // Produto individual
  async getProduct(uuid: string): Promise<ProductDto | null> {
    const data = await this.redis.getKey(REDIS_KEYS.PRODUCT(uuid));
    return data ? (JSON.parse(data) as ProductDto) : null;
  }

  async setProduct(product: ProductDto): Promise<void> {
    await this.redis.setKey(
      REDIS_KEYS.PRODUCT(product.uuid),
      JSON.stringify(product),
    );
  }

  async invalidateProduct(uuid: string): Promise<void> {
    await this.redis.invalidateKey(REDIS_KEYS.PRODUCT(uuid));
  }

  // Lista completa
  async getProducts(): Promise<ProductDto[] | null> {
    const data = await this.redis.getKey(REDIS_KEYS.PRODUCT_ALL);
    return data ? (JSON.parse(data) as ProductDto[]) : null;
  }

  async setProducts(products: ProductDto[]): Promise<void> {
    await this.redis.setKey(REDIS_KEYS.PRODUCT_ALL, JSON.stringify(products));
  }

  // Lista paginada
  async getPaginatedProducts(
    limit: number,
    offset: number,
  ): Promise<ProductDto[] | null> {
    const key = REDIS_KEYS.PRODUCTS_PAGINATED(limit, offset);
    const data = await this.redis.getKey(key);
    return data ? (JSON.parse(data) as ProductDto[]) : null;
  }

  async setPaginatedProducts(
    limit: number,
    offset: number,
    products: ProductDto[],
  ): Promise<void> {
    const key = REDIS_KEYS.PRODUCTS_PAGINATED(limit, offset);
    await this.redis.setKey(key, JSON.stringify(products));
  }

  async invalidateAllProductList(): Promise<void> {
    const keys = await this.redis.getKeysMatching(
      REDIS_KEYS.INVALIDATE_PRODUCT_ALL,
    );
    for (const key of keys) {
      await this.redis.invalidateKey(key);
    }
  }
}
