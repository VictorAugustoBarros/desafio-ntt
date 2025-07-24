import { Inject, Injectable } from '@nestjs/common';
import { IProductServiceToken } from '../constants/product.constants';
import { DeleteProductResponse } from '../dto/delete/delete-product-response.dto';
import { IProductService } from '../interfaces/product.service.interface';
import { ProductExceptionError } from '../exceptions/product-exception.error';
import { ProductErrorCode } from '../exceptions/product-error.enum';
import { DeleteProductUseCase } from '../use-cases/delete-product.use-case';
import { REDIS_KEYS } from 'src/shared/redis/constants/redis-keys.constants';
import { RedisService } from 'src/shared/redis/redis.service';

@Injectable()
export class DeleteProductHandler {
  constructor(
    @Inject(IProductServiceToken)
    private readonly productService: IProductService,
    private readonly deleteProductUseCase: DeleteProductUseCase,
    private readonly redisService: RedisService,
  ) {}

  async execute(uuid: string): Promise<DeleteProductResponse> {
    const product = await this.productService.getProduct({
      uuid: uuid,
    });
    if (!product) {
      throw new ProductExceptionError(ProductErrorCode.PRODUCT_NOT_FOUND);
    }

    await this.deleteProductUseCase.execute(uuid);

    await this.redisService.invalidateKey(REDIS_KEYS.PRODUCT(uuid));
    await this.redisService.invalidateKey(REDIS_KEYS.PRODUCT_ALL);
    await this.redisService.invalidateKey(REDIS_KEYS.INVALIDATE_PRODUCT_ALL);

    return {
      message: 'Produto deletado com sucesso',
    };
  }
}
