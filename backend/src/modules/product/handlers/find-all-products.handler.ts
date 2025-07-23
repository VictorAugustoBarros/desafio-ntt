import { Injectable } from '@nestjs/common';
import { FindAllProductsUseCase } from '../use-cases/find-all-products.use-case';
import { ProductDto } from '../dto/product.dto';
import { FindAllProductsResponse } from '../dto/find/find-all-products-response.dto';
import { RedisService } from 'src/shared/redis/redis.service';

@Injectable()
export class FindAllProductsHandler {
  private readonly cacheKey = 'products:all';

  constructor(
    private findAllProductsUseCase: FindAllProductsUseCase,
    private redisService: RedisService,
  ) {}

  async execute(): Promise<FindAllProductsResponse> {
    // Verifica o Cache
    const cached = await this.redisService.getKey(this.cacheKey);

    if (cached) {
      return JSON.parse(cached) as FindAllProductsResponse;
    }

    // Busca no banco
    const products = await this.findAllProductsUseCase.execute();

    const response: FindAllProductsResponse = {
      products: products.map((product: ProductDto) => ({
        uuid: product.uuid,
        name: product.name,
        description: product.description,
        price: product.price,
        category: {
          uuid: product.category?.uuid ?? '',
          name: product.category?.name ?? '',
        },
      })),
    };

    // Salva no cache
    await this.redisService.setKey(this.cacheKey, JSON.stringify(response), 60);

    return response;
  }
}
