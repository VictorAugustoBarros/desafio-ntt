import { Injectable } from '@nestjs/common';
import { FindAllProductsUseCase } from '../use-cases/find-all-products.use-case';
import { ProductDto } from '../dto/product.dto';
import { FindAllProductsResponse } from '../dto/find/find-all-products-response.dto';
import { RedisService } from 'src/shared/redis/redis.service';
import { REDIS_KEYS } from 'src/shared/redis/constants/redis-keys.constants';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class FindAllProductsHandler {
  constructor(
    private findAllProductsUseCase: FindAllProductsUseCase,
    private redisService: RedisService,
  ) {}

  async execute(
    paginationDto: PaginationDto,
  ): Promise<FindAllProductsResponse> {
    // Verifica o Cache
    const cacheKey =
      paginationDto.limit || paginationDto.offset
        ? REDIS_KEYS.PRODUCTS_PAGINATED(
            paginationDto.limit,
            paginationDto.offset,
          )
        : REDIS_KEYS.PRODUCT_ALL;

    const cached = await this.redisService.getKey(cacheKey);
    if (cached) {
      return JSON.parse(cached) as FindAllProductsResponse;
    }

    if (cached) {
      return JSON.parse(cached) as FindAllProductsResponse;
    }

    // Busca no banco
    const products = await this.findAllProductsUseCase.execute(paginationDto);

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
    await this.redisService.setKey(cacheKey, JSON.stringify(response), 60);

    return response;
  }
}
