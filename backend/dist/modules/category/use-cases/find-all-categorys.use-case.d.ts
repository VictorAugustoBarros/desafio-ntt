import { PrismaService } from 'src/shared/database/prisma.service';
import { CategoryDto } from '../dtos/category.dto';
export declare class FindAllCategoriesUseCase {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    execute(): Promise<CategoryDto[]>;
}
