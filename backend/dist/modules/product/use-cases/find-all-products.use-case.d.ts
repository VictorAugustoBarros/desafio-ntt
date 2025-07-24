import { PrismaService } from 'src/shared/database/prisma.service';
import { ProductDto } from '../dto/product.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
export declare class FindAllProductsUseCase {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    execute(paginationDto?: PaginationDto): Promise<ProductDto[]>;
}
