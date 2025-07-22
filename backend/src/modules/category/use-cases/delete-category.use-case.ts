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
export class DeleteCategoryUseCase {
  private readonly logger = new Logger(DeleteCategoryUseCase.name);

  constructor(private readonly prisma: PrismaService) {}

  async execute(uuid: string): Promise<CategoryDto> {
    try {
      const categoryDB: Categoria = await this.prisma.categoria.delete({
        where: { uuid },
      });

      return toCategoryDto(categoryDB);
    } catch (error: any) {
      this.logger.error('Erro ao deletar categoria', error.message);
      throw new InternalServerErrorException('Erro ao deletar categoria');
    }
  }
}
