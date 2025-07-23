import { Inject, Injectable } from '@nestjs/common';
import { IProductServiceToken } from '../constants/product.constants';
import { ProductErrorCode } from '../exceptions/product-error.enum';
import { ProductExceptionError } from '../exceptions/product-exception.error';
import { IProductService } from '../interfaces/product.service.interface';
import { FindProductResponse } from '../dto/find/find-product-response.dto';
import { RedisService } from 'src/shared/redis/redis.service';

@Injectable()
export class FindProductHandler {
  constructor(
    @Inject(IProductServiceToken)
    private readonly productService: IProductService,
    private redisService: RedisService,
  ) {}

  private getCacheKey(uuid: string): string {
    return `product:${uuid}`;
  }

  async execute(uuid: string): Promise<FindProductResponse> {
    // Tenta pegar do cache
    const cacheKey = this.getCacheKey(uuid);
    const cached = await this.redisService.getKey(cacheKey);
    if (cached) {
      return JSON.parse(cached) as FindProductResponse;
    }

    // Busca no banco
    const product = await this.productService.getProduct({ uuid: uuid });
    if (!product) {
      throw new ProductExceptionError(ProductErrorCode.PRODUCT_NOT_FOUND);
    }

    const response: FindProductResponse = {
      name: product.name,
      description: product.description,
      price: product.price,
      category: {
        uuid: product.category?.uuid ?? '',
        name: product.category?.name ?? '',
      },
    };

    // Salva no cache
    await this.redisService.setKey(cacheKey, JSON.stringify(response), 60);

    return response;
  }
}
