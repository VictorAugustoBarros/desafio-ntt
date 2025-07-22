import { Inject, Injectable } from '@nestjs/common';
import { IProductServiceToken } from '../constants/product.constants';
import { ProductErrorCode } from '../exceptions/product-error.enum';
import { ProductExceptionError } from '../exceptions/product-exception.error';
import { IProductService } from '../interfaces/product.service.interface';
import { FindProductResponse } from '../dto/find/find-product-response.dto';

@Injectable()
export class FindProductHandler {
  constructor(
    @Inject(IProductServiceToken)
    private readonly productService: IProductService,
  ) {}

  async execute(uuid: string): Promise<FindProductResponse> {
    const product = await this.productService.getProduct({ uuid: uuid });
    if (!product) {
      throw new ProductExceptionError(ProductErrorCode.PRODUCT_NOT_FOUND);
    }

    return {
      name: product.name,
      description: product.description,
      price: product.price,
      categoria: '',
    };
  }
}
