import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';
import { SharedModule } from 'src/shared/shared.module';
import { FindAllProductsHandler } from './handlers/find-all-products.handler';
import { FindAllProductsUseCase } from './use-cases/find-all-products.use-case';
import { CreateProductUseCase } from './use-cases/create-product.use-case';
import { CreateProductHandler } from './handlers/create-product.handler';
import { CategoryModule } from '../category/category.module';
import { UpdateProductHandler } from './handlers/update-product.handler';
import { DeleteProductHandler } from './handlers/delete-product.handler';
import { IProductServiceToken } from './constants/product.constants';
import { ProductService } from './services/product.service';
import { FindProductHandler } from './handlers/find-product.handler';
import { FindProductByNameUseCase } from './use-cases/find-product-by-name.use-case';
import { FindProductByUuidUseCase } from './use-cases/find-product-by-id.use-case';
import { DeleteProductUseCase } from './use-cases/delete-product.use-case';
import { UpdateProductUseCase } from './use-cases/update-product.use-case';
import { ProductsCacheService } from './services/products.cache';

@Module({
  imports: [SharedModule, CategoryModule],
  controllers: [ProductController],
  providers: [
    // Handlers
    FindAllProductsHandler,
    FindProductHandler,
    CreateProductHandler,
    UpdateProductHandler,
    DeleteProductHandler,

    // Use Cases
    FindAllProductsUseCase,
    CreateProductUseCase,
    FindProductByNameUseCase,
    FindProductByUuidUseCase,
    UpdateProductUseCase,
    DeleteProductUseCase,

    // Services
    {
      provide: IProductServiceToken,
      useClass: ProductService,
    },
    ProductsCacheService,
  ],
})
export class ProductModule {}
