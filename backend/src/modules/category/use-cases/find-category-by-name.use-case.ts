/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Injectable,
  Logger,
  InternalServerErrorException,
} from '@nestjs/common';
import { Categoria } from '@prisma/client';
import { PrismaService } from 'src/shared/database/prisma.service';
import { toCategoryDto } from '../mapper/calendar.mapper';
import { CategoryDto } from '../dtos/category.dto';

@Injectable()
export class FindCategoryByNameUseCase {
  private readonly logger = new Logger(FindCategoryByNameUseCase.name);

  constructor(private readonly prisma: PrismaService) {}

  async execute(name: string): Promise<CategoryDto | null> {
    try {
      const categoryDB: Categoria | null =
        await this.prisma.categoria.findFirst({
          where: { name },
        });

      if (!categoryDB) {
        return null;
      }

      return toCategoryDto(categoryDB);
    } catch (error: any) {
      this.logger.error('Erro ao buscar categoria por nome', error.message);
      throw new InternalServerErrorException(
        'Erro ao buscar categoria por nome',
      );
    }
  }
}
