import { PrismaService } from 'src/shared/database/prisma.service';
import { CategoryDto } from '../dtos/category.dto';
export declare class DeleteCategoryUseCase {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    execute(uuid: string): Promise<CategoryDto>;
}
