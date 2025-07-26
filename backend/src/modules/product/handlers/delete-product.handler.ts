import { Inject, Injectable } from '@nestjs/common';
import { IProductServiceToken } from '../constants/product.constants';
import { DeleteProductResponse } from '../dto/delete/delete-product-response.dto';
import { IProductService } from '../interfaces/product.service.interface';
import { ProductExceptionError } from '../exceptions/product-exception.error';
import { ProductErrorCode } from '../exceptions/product-error.enum';
import { DeleteProductUseCase } from '../use-cases/delete-product.use-case';
import { ProductsCacheService } from '../services/products.cache';

@Injectable()
export class DeleteProductHandler {
  constructor(
    @Inject(IProductServiceToken)
    private readonly productService: IProductService,
    private readonly deleteProductUseCase: DeleteProductUseCase,
    private readonly productsCache: ProductsCacheService,
  ) {}

  async execute(uuid: string): Promise<DeleteProductResponse> {
    const product = await this.productService.getProduct({
      uuid: uuid,
    });
    if (!product) {
      throw new ProductExceptionError(ProductErrorCode.PRODUCT_NOT_FOUND);
    }

    await this.deleteProductUseCase.execute(uuid);

    // Invalidar o Cache
    await this.productsCache.invalidateProduct(uuid);
    await this.productsCache.invalidateAllProductList();

    return {
      message: 'Produto deletado com sucesso',
    };
  }
}
