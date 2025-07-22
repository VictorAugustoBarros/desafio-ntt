import { Inject, Injectable } from '@nestjs/common';
import { IProductServiceToken } from '../constants/product.constants';
import { DeleteProductResponse } from '../dto/delete/delete-product-response.dto';
import { IProductService } from '../interfaces/product.service.interface';

@Injectable()
export class DeleteProductHandler {
  constructor(
    @Inject(IProductServiceToken)
    private readonly productService: IProductService,
  ) {}

  async execute(uuid: string): Promise<DeleteProductResponse> {
    return {
      message: '',
    };
  }
}
