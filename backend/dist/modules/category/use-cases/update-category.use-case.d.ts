import { PrismaService } from 'src/shared/database/prisma.service';
import { UpdateCategoryDTO } from '../dtos/update/update-category.dto';
import { CategoryDto } from '../dtos/category.dto';
export declare class UpdateCategoryUseCase {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    execute({ uuid, name, }: UpdateCategoryDTO): Promise<CategoryDto | null>;
}
