import { Module } from '@nestjs/common';
import { CategoryController } from './controllers/category.controller';
import { CreateCategoryUseCase } from './use-cases/create-category.use-case';
import { CreateCategoryHandler } from './handlers/create-category.handler';
import { SharedModule } from 'src/shared/shared.module';
import { FindCategoryByNameUseCase } from './use-cases/find-category-by-name.use-case';
import { FindCategoryHandler } from './handlers/find-category.handler';
import { FindCategoryByUuidUseCase } from './use-cases/find-category-by-id.use-case';
import { UpdateCategoryHandler } from './handlers/update-category.handler';
import { DeleteCategoryHandler } from './handlers/delete-category.handler';
import { DeleteCategoryUseCase } from './use-cases/delete-category.use-case';
import { UpdateCategoryUseCase } from './use-cases/update-category.use-case';
import { FindAllCategoriesHandler } from './handlers/find-all-categories.handler';
import { FindAllCategoriesUseCase } from './use-cases/find-all-categorys.use-case';
import { ICategoryServiceToken } from './constants/category.constants';
import { CategoryService } from './services/category.service';

@Module({
  imports: [SharedModule],
  controllers: [CategoryController],
  providers: [
    // Handlers
    FindCategoryHandler,
    CreateCategoryHandler,
    UpdateCategoryHandler,
    DeleteCategoryHandler,
    FindAllCategoriesHandler,

    // Use Cases
    FindCategoryByNameUseCase,
    FindCategoryByUuidUseCase,
    CreateCategoryUseCase,
    DeleteCategoryUseCase,
    UpdateCategoryUseCase,
    FindAllCategoriesUseCase,

    // Services
    {
      provide: ICategoryServiceToken,
      useClass: CategoryService,
    },
  ],
  exports: [ICategoryServiceToken],
})
export class CategoryModule {}
