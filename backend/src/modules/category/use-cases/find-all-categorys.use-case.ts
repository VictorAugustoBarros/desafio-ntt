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
export class FindAllCategoriesUseCase {
  private readonly logger = new Logger(FindAllCategoriesUseCase.name);

  constructor(private readonly prisma: PrismaService) {}

  async execute(): Promise<CategoryDto[]> {
    try {
      const categoriesDB: Categoria[] = await this.prisma.categoria.findMany(
        {},
      );

      return categoriesDB.map((categoryDB: Categoria) => {
        return toCategoryDto(categoryDB);
      });
    } catch (error: any) {
      this.logger.error('Erro ao buscar categorias', error.message);
      throw new InternalServerErrorException('Erro ao buscar categorias');
    }
  }
}
