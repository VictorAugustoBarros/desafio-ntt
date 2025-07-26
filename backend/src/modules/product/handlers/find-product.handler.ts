import { Inject, Injectable } from '@nestjs/common';
import { IProductServiceToken } from '../constants/product.constants';
import { ProductErrorCode } from '../exceptions/product-error.enum';
import { ProductExceptionError } from '../exceptions/product-exception.error';
import { IProductService } from '../interfaces/product.service.interface';
import { FindProductResponse } from '../dto/find/find-product-response.dto';
import { ProductsCacheService } from '../services/products.cache';

@Injectable()
export class FindProductHandler {
  constructor(
    @Inject(IProductServiceToken)
    private readonly productService: IProductService,
    private readonly productsCache: ProductsCacheService,
  ) {}

  async execute(uuid: string): Promise<FindProductResponse> {
    // Tenta pegar do cache
    const cachedProduct = await this.productsCache.getProduct(uuid);
    if (cachedProduct) {
      return cachedProduct as FindProductResponse;
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

    await this.productsCache.setProduct(product);

    return response;
  }
}
