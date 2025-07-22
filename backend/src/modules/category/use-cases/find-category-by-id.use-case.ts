/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Injectable,
  Logger,
  InternalServerErrorException,
} from '@nestjs/common';
import { Categoria } from '@prisma/client';
import { PrismaService } from 'src/shared/database/prisma.service';
import { CategoryDto } from '../dtos/category.dto';
import { toCategoryDto } from '../mapper/calendar.mapper';

@Injectable()
export class FindCategoryByUuidUseCase {
  private readonly logger = new Logger(FindCategoryByUuidUseCase.name);

  constructor(private readonly prisma: PrismaService) {}

  async execute(uuid: string): Promise<CategoryDto | null> {
    try {
      const categoryDB: Categoria | null =
        await this.prisma.categoria.findFirst({
          where: { uuid },
        });

      if (!categoryDB) {
        return null;
      }

      return toCategoryDto(categoryDB);
    } catch (error: any) {
      this.logger.error('Erro ao buscar categoria por uuid', error.message);
      throw new InternalServerErrorException(
        'Erro ao buscar categoria por uuid',
      );
    }
  }
}
