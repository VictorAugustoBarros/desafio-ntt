import { Categoria } from '@prisma/client';
import { CategoryDto } from '../dtos/category.dto';
export declare function toCategoryDto(entity: Categoria): CategoryDto;
