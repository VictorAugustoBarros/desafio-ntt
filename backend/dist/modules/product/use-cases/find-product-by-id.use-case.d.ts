import { PrismaService } from 'src/shared/database/prisma.service';
import { ProductDto } from '../dto/product.dto';
export declare class FindProductByUuidUseCase {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    execute(uuid: string): Promise<ProductDto | null>;
}
