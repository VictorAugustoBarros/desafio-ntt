import { Produto } from '@prisma/client';
import { ProductDto } from '../dto/product.dto';
export declare function toProductDto(entity: Produto): ProductDto;
