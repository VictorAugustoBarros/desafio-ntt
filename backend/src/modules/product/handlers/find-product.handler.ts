import { Inject, Injectable } from '@nestjs/common';
import { IProductServiceToken } from '../constants/product.constants';
import { ProductErrorCode } from '../exceptions/product-error.enum';
import { ProductExceptionError } from '../exceptions/product-exception.error';
import { IProductService } from '../interfaces/product.service.interface';
import { FindProductResponse } from '../dto/find/find-product-response.dto';
import { RedisService } from 'src/shared/redis/redis.service';
import { REDIS_KEYS } from 'src/shared/redis/constants/redis-keys.constants';

@Injectable()
export class FindProductHandler {
  constructor(
    @Inject(IProductServiceToken)
    private readonly productService: IProductService,
    private redisService: RedisService,
  ) {}

  async execute(uuid: string): Promise<FindProductResponse> {
    // Tenta pegar do cache
    const cached = await this.redisService.getKey(REDIS_KEYS.PRODUCT(uuid));
    if (cached) {
      return JSON.parse(cached) as FindProductResponse;
    }

    // Busca no banco
    const product = await this.productService.getProduct({ uuid: uuid });
    if (!product) {
      throw new ProductExceptionError(ProductErrorCode.PRODUCT_NOT_FOUND);
    }

    const response: FindProductResponse = {
      uuid: product.uuid,
      name: product.name,
      description: product.description,
      price: product.price,
      category: {
        uuid: product.category?.uuid ?? '',
        name: product.category?.name ?? '',
      },
    };

    // Salva no cache
    await this.redisService.setKey(
      REDIS_KEYS.PRODUCT(uuid),
      JSON.stringify(response),
      60,
    );

    return response;
  }
}
