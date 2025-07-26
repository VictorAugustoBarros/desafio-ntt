import { PrismaService } from 'src/shared/database/prisma.service';
import { ProductDto } from '../dto/product.dto';
export type UpdateProductParams = {
    uuid: string;
    name?: string;
    description?: string;
    price?: number;
    categoryId?: number;
};
export declare class UpdateProductUseCase {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    execute(params: UpdateProductParams): Promise<ProductDto>;
}
