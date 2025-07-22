import { Inject, Injectable } from '@nestjs/common';
import { IProductServiceToken } from '../constants/product.constants';
import { UpdateProductRequest } from '../dto/update/update-product-request.dto';
import { UpdateProductResponse } from '../dto/update/update-product-response.dto';
import { IProductService } from '../interfaces/product.service.interface';

@Injectable()
export class UpdateProductHandler {
  constructor(
    @Inject(IProductServiceToken)
    private readonly categoryService: IProductService,
  ) {}

  async execute(
    uuid: string,
    new_categoria: UpdateProductRequest,
  ): Promise<UpdateProductResponse> {
    return {
      message: 'Produto atualizada com sucesso',
    };
  }
}
