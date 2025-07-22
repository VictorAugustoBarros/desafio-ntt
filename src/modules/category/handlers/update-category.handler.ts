import { Inject, Injectable } from '@nestjs/common';
import { CategoryExceptionError } from '../exceptions/category-exception.error';
import { CategoryErrorCode } from '../exceptions/category-error.enum';
import { UpdateCategoryRequest } from '../dtos/update/update-category-request.dto';
import { UpdateCategoryResponse } from '../dtos/update/update-category-response.dto';
import { UpdateCategoryUseCase } from '../use-cases/update-category.use-case';
import { ICategoryServiceToken } from '../constants/category.constants';
import { ICategoryService } from '../interfaces/category.service.interface';

@Injectable()
export class UpdateCategoryHandler {
  constructor(
    private updateCategoryUseCase: UpdateCategoryUseCase,
    @Inject(ICategoryServiceToken)
    private readonly categoryService: ICategoryService,
  ) {}

  async execute(
    uuid: string,
    new_categoria: UpdateCategoryRequest,
  ): Promise<UpdateCategoryResponse> {
    const category = await this.categoryService.getCategory({ uuid: uuid });
    if (!category) {
      throw new CategoryExceptionError(CategoryErrorCode.CATEGORY_NOT_FOUND);
    }

    await this.updateCategoryUseCase.execute({
      uuid: uuid,
      name: new_categoria.name,
    });

    return {
      message: 'Categoria atualizada com sucesso',
    };
  }
}
