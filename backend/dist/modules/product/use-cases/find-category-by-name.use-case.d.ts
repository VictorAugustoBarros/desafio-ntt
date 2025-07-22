import { PrismaService } from 'src/shared/database/prisma.service';
import { CategoryDto } from '../dtos/category.dto';
export declare class FindCategoryByNameUseCase {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    execute(name: string): Promise<CategoryDto | null>;
}
