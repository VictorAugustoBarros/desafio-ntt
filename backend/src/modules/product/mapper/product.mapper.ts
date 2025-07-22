import { Produto } from '@prisma/client';
import { ProductDto } from '../dto/product.dto';

export function toProductDto(entity: Produto): ProductDto {
  return {
    id: entity.id,
    uuid: entity.uuid,
    name: entity.name,
    description: entity.description,
    price: entity.price,
    categoryId: entity.categoryId,
  };
}
