import { Inject, Injectable } from '@nestjs/common';
import { CategoryExceptionError } from '../exceptions/category-exception.error';
import { CategoryErrorCode } from '../exceptions/category-error.enum';
import { DeleteCategoryResponse } from '../dtos/delete/delete-category-response.dto';
import { DeleteCategoryUseCase } from '../use-cases/delete-category.use-case';
import { ICategoryServiceToken } from '../constants/category.constants';
import { ICategoryService } from '../interfaces/category.service.interface';

@Injectable()
export class DeleteCategoryHandler {
  constructor(
    @Inject(ICategoryServiceToken)
    private readonly categoryService: ICategoryService,
    private deleteCategoryUseCase: DeleteCategoryUseCase,
  ) {}

  async execute(uuid: string): Promise<DeleteCategoryResponse> {
    const category = await this.categoryService.getCategory({ uuid: uuid });
    if (!category) {
      throw new CategoryExceptionError(CategoryErrorCode.CATEGORY_NOT_FOUND);
    }

    await this.deleteCategoryUseCase.execute(uuid);

    return {
      message: 'Category deletada com sucesso',
    };
  }
}
