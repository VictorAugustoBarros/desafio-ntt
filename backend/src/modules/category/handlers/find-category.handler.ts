import { Inject, Injectable } from '@nestjs/common';
import { CategoryExceptionError } from '../exceptions/category-exception.error';
import { CategoryErrorCode } from '../exceptions/category-error.enum';
import { FindCategoryResponse } from '../dtos/find/find-category-response.dto';
import { ICategoryServiceToken } from '../constants/category.constants';
import { ICategoryService } from '../interfaces/category.service.interface';

@Injectable()
export class FindCategoryHandler {
  constructor(
    @Inject(ICategoryServiceToken)
    private readonly categoryService: ICategoryService,
  ) {}

  async execute(uuid: string): Promise<FindCategoryResponse> {
    const category = await this.categoryService.getCategory({ uuid: uuid });
    if (!category) {
      throw new CategoryExceptionError(CategoryErrorCode.CATEGORY_NOT_FOUND);
    }

    return {
      name: category.name,
    };
  }
}
