import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoryRequest } from '../dtos/create/create-category-request.dto';
import { CreateCategoryResponse } from '../dtos/create/create-category-response.dto';
import { CategoryExceptionError } from '../exceptions/category-exception.error';
import { CategoryErrorCode } from '../exceptions/category-error.enum';
import { CreateCategoryUseCase } from '../use-cases/create-category.use-case';
import { ICategoryServiceToken } from '../constants/category.constants';
import { ICategoryService } from '../interfaces/category.service.interface';

@Injectable()
export class CreateCategoryHandler {
  constructor(
    @Inject(ICategoryServiceToken)
    private readonly categoryService: ICategoryService,
    private createCategoryUseCase: CreateCategoryUseCase,
  ) {}

  async execute(
    request: CreateCategoryRequest,
  ): Promise<CreateCategoryResponse> {
    const categoryExists = await this.categoryService.getCategory({
      name: request.name,
    });
    if (categoryExists) {
      throw new CategoryExceptionError(
        CategoryErrorCode.CATEGORY_ALREADY_EXISTS,
      );
    }

    const category = await this.createCategoryUseCase.execute(request.name);

    return {
      message: 'Category criada com sucesso',
      uuid: String(category.uuid),
    };
  }
}
