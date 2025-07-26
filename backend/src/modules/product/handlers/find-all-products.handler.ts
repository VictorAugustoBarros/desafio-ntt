import { Injectable } from '@nestjs/common';
import { FindAllProductsUseCase } from '../use-cases/find-all-products.use-case';
import { ProductDto } from '../dto/product.dto';
import { FindAllProductsResponse } from '../dto/find/find-all-products-response.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { ProductsCacheService } from '../services/products.cache';

@Injectable()
export class FindAllProductsHandler {
  constructor(
    private readonly findAllProductsUseCase: FindAllProductsUseCase,
    private readonly productsCache: ProductsCacheService,
  ) {}

  async execute(
    paginationDto: PaginationDto,
  ): Promise<FindAllProductsResponse> {
    const { limit, offset } = paginationDto;
    let cachedProducts: ProductDto[] | null = null;

    // Tenta pegar do cache paginado ou geral
    if (limit && offset) {
      cachedProducts = await this.productsCache.getPaginatedProducts(
        limit,
        offset,
      );
    } else {
      cachedProducts = await this.productsCache.getProducts();
    }

    if (cachedProducts) {
      return { products: cachedProducts } as FindAllProductsResponse;
    }

    // Busca no banco de dados
    const products = await this.findAllProductsUseCase.execute(paginationDto);

    // Mapeia para o DTO da resposta
    const response: FindAllProductsResponse = {
      products: products.map((product) => ({
        uuid: product.uuid,
        name: product.name,
        description: product.description,
        price: product.price,
        category: {
          uuid: product.category?.uuid ?? '',
          name: product.category?.name ?? '',
        },
      })),
    };

    // Salva no cache com TTL de 60 segundos
    if (limit && offset) {
      await this.productsCache.setPaginatedProducts(limit, offset, products);
    } else {
      await this.productsCache.setProducts(products);
    }

    return response;
  }
}
