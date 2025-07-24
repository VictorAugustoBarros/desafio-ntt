import { Inject, Injectable } from '@nestjs/common';

import { CreateProductRequest } from '../dto/create/create-product-request.dto';
import { CreateProductResponse } from '../dto/create/create-product-response.dto';
import { CreateProductUseCase } from '../use-cases/create-product.use-case';
import { ProductExceptionError } from '../exceptions/product-exception.error';
import { ProductErrorCode } from '../exceptions/product-error.enum';
import { ICategoryServiceToken } from 'src/modules/category/constants/category.constants';
import { ICategoryService } from 'src/modules/category/interfaces/category.service.interface';
import { RedisService } from 'src/shared/redis/redis.service';
import { REDIS_KEYS } from 'src/shared/redis/constants/redis-keys.constants';

@Injectable()
export class CreateProductHandler {
  constructor(
    @Inject(ICategoryServiceToken)
    private readonly categoryService: ICategoryService,
    private createProductUseCase: CreateProductUseCase,
    private redisService: RedisService,
  ) {}

  async execute(request: CreateProductRequest): Promise<CreateProductResponse> {
    const category = await this.categoryService.getCategory({
      uuid: request.categoryUuid,
    });
    if (!category) {
      throw new ProductExceptionError(
        ProductErrorCode.PRODUCT_CATEGORY_NOT_FOUND,
      );
    }

    const product = await this.createProductUseCase.execute(
      request.name,
      request.description,
      request.price,
      category.id,
    );

    await this.redisService.invalidateKey(REDIS_KEYS.PRODUCT_ALL);
    await this.redisService.invalidateKey(REDIS_KEYS.INVALIDATE_PRODUCT_ALL);

    return {
      message: 'Product criada com sucesso',
      uuid: String(product.uuid),
    };
  }
}
