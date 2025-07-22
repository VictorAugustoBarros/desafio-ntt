import { Injectable } from '@nestjs/common';
import { FindAllCategoriesResponse } from '../dtos/find/find-all-categories-response.dto';
import { FindAllCategoriesUseCase } from '../use-cases/find-all-categorys.use-case';
import { Categoria } from '@prisma/client';

@Injectable()
export class FindAllCategoriesHandler {
  constructor(private findAllCategoriesUseCase: FindAllCategoriesUseCase) {}

  async execute(): Promise<FindAllCategoriesResponse> {
    const categorias = await this.findAllCategoriesUseCase.execute();

    return {
      categorias: categorias.map((category: Categoria) => {
        return { uuid: String(category.uuid), name: category.name };
      }),
    };
  }
}
