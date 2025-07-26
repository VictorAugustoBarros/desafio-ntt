import { Categoria, Produto } from '@prisma/client';
import { ProductDto } from '../dto/product.dto';
export interface ProdutoWithOptionalCategory extends Produto {
    category?: Categoria | null;
}
export declare function toProductDto(entity: ProdutoWithOptionalCategory): ProductDto;
