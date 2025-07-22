import { Injectable } from '@nestjs/common';
import { FindAllProductsUseCase } from '../use-cases/find-all-products.use-case';
import { ProductDto } from '../dto/product.dto';
import { FindAllProductsResponse } from '../dto/find/find-all-products-response.dto';

@Injectable()
export class FindAllProductsHandler {
  constructor(private findAllProductsUseCase: FindAllProductsUseCase) {}

  async execute(): Promise<FindAllProductsResponse> {
    const products = await this.findAllProductsUseCase.execute();

    return {
      products: products.map((product: ProductDto) => {
        return {
          uuid: product.uuid,
          name: product.name,
          description: product.description,
          price: product.price,
          categoria: '',
        };
      }),
    };
  }
}
