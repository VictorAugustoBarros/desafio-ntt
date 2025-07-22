import { Injectable } from '@nestjs/common';
import { IProductService } from '../interfaces/product.service.interface';
import { ProductDto } from '../dto/product.dto';
import { FindProductByUuidUseCase } from '../use-cases/find-product-by-id.use-case';
import { FindProductByNameUseCase } from '../use-cases/find-product-by-name.use-case';

@Injectable()
export class ProductService implements IProductService {
  constructor(
    private readonly findProductByUuidUseCase: FindProductByUuidUseCase,
    private readonly findProductByNameUseCase: FindProductByNameUseCase,
  ) {}

  async getProduct({
    name,
    uuid,
  }: {
    name: string;
    uuid: string;
  }): Promise<ProductDto | null> {
    if (name) {
      return await this.findProductByNameUseCase.execute(name);
    }

    if (uuid) {
      return await this.findProductByUuidUseCase.execute(uuid);
    }

    return Promise.resolve(null);
  }
}
