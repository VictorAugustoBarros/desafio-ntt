import { Categoria, Produto } from '@prisma/client';
import { ProductDto } from '../dto/product.dto';

export interface ProdutoWithOptionalCategory extends Produto {
  category?: Categoria | null;
}

export function toProductDto(entity: ProdutoWithOptionalCategory): ProductDto {
  return {
    id: entity.id,
    uuid: entity.uuid,
    name: entity.name,
    description: entity.description,
    price: entity.price,
    categoryId: entity.categoryId,
    category: entity.category ?? undefined,
  };
}
