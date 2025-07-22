import { Injectable } from '@nestjs/common';
import { ICategoryService } from '../interfaces/category.service.interface';
import { CategoryDto } from '../dtos/category.dto';
import { FindCategoryByNameUseCase } from '../use-cases/find-category-by-name.use-case';
import { FindCategoryByUuidUseCase } from '../use-cases/find-category-by-id.use-case';

@Injectable()
export class CategoryService implements ICategoryService {
  constructor(
    private readonly findCategoryByNameUseCase: FindCategoryByNameUseCase,
    private readonly findCategoryByUuidUseCase: FindCategoryByUuidUseCase,
  ) {}

  async getCategory({
    name,
    uuid,
  }: {
    name: string;
    uuid: string;
  }): Promise<CategoryDto | null> {
    if (name) {
      return await this.findCategoryByNameUseCase.execute(name);
    }

    if (uuid) {
      return await this.findCategoryByUuidUseCase.execute(uuid);
    }

    return Promise.resolve(null);
  }
}
