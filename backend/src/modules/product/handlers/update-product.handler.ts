import { Inject, Injectable } from '@nestjs/common';
import { IProductServiceToken } from '../constants/product.constants';
import { UpdateProductRequest } from '../dto/update/update-product-request.dto';
import { UpdateProductResponse } from '../dto/update/update-product-response.dto';
import { IProductService } from '../interfaces/product.service.interface';
import { ProductErrorCode } from '../exceptions/product-error.enum';
import { ProductExceptionError } from '../exceptions/product-exception.error';
import {
  UpdateProductParams,
  UpdateProductUseCase,
} from '../use-cases/update-product.use-case';
import { ICategoryServiceToken } from 'src/modules/category/constants/category.constants';
import { ICategoryService } from 'src/modules/category/interfaces/category.service.interface';
import { RedisService } from 'src/shared/redis/redis.service';
import { REDIS_KEYS } from 'src/shared/redis/constants/redis-keys.constants';

@Injectable()
export class UpdateProductHandler {
  constructor(
    @Inject(IProductServiceToken)
    private readonly productService: IProductService,
    @Inject(ICategoryServiceToken)
    private readonly categoryService: ICategoryService,
    private readonly updateProductUseCase: UpdateProductUseCase,
    private readonly redisService: RedisService,
  ) {}

  async execute(
    uuid: string,
    updateProduct: UpdateProductRequest,
  ): Promise<UpdateProductResponse> {
    const product = await this.productService.getProduct({
      uuid: uuid,
    });
    if (!product) {
      throw new ProductExceptionError(ProductErrorCode.PRODUCT_NOT_FOUND);
    }

    const params: UpdateProductParams = {
      uuid: uuid,
      name: updateProduct.name,
      description: updateProduct.description,
      price: updateProduct.price,
    };

    if (updateProduct.categoryUuid) {
      const category = await this.categoryService.getCategory({
        uuid: updateProduct.categoryUuid,
      });

      if (!category) {
        throw new ProductExceptionError(
          ProductErrorCode.PRODUCT_CATEGORY_NOT_FOUND,
        );
      }

      params.categoryId = category.id;
    }

    await this.updateProductUseCase.execute(params);

    await this.redisService.invalidateKey(REDIS_KEYS.PRODUCT(uuid));
    await this.redisService.invalidateKey(REDIS_KEYS.PRODUCT_ALL);
    await this.redisService.invalidateKey(REDIS_KEYS.INVALIDATE_PRODUCT_ALL);

    return {
      message: 'Produto atualizada com sucesso',
    };
  }
}
