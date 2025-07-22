import { PrismaService } from 'src/shared/database/prisma.service';
import { ProductDto } from '../dto/product.dto';
export declare class CreateProductUseCase {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    execute(name: string, description: string, price: number, categoryId: number): Promise<ProductDto>;
}
