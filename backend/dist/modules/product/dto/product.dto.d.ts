import { Categoria } from '@prisma/client';
export declare class ProductDto {
    id: number;
    uuid: string;
    name: string;
    description: string;
    price: number;
    categoryId: number;
    category?: Categoria;
}
