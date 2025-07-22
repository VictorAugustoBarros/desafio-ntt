import { Categoria } from '@prisma/client';
import { CategoryDto } from '../dtos/category.dto';

export function toCategoryDto(entity: Categoria): CategoryDto {
  return {
    id: entity.id,
    uuid: entity.uuid,
    name: entity.name,
  };
}
