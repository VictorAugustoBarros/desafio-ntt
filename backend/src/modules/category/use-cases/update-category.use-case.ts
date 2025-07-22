/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Injectable,
  Logger,
  InternalServerErrorException,
} from '@nestjs/common';
import { Categoria } from '@prisma/client';
import { PrismaService } from 'src/shared/database/prisma.service';
import { UpdateCategoryDTO } from '../dtos/update/update-category.dto';
import { toCategoryDto } from '../mapper/calendar.mapper';
import { CategoryDto } from '../dtos/category.dto';

@Injectable()
export class UpdateCategoryUseCase {
  private readonly logger = new Logger(UpdateCategoryUseCase.name);

  constructor(private readonly prisma: PrismaService) {}

  async execute({
    uuid,
    name,
  }: UpdateCategoryDTO): Promise<CategoryDto | null> {
    try {
      const categoryDB: Categoria | null = await this.prisma.categoria.update({
        where: { uuid },
        data: {
          ...(name !== undefined && { name }),
        },
      });

      if (!categoryDB) {
        return null;
      }

      return toCategoryDto(categoryDB);
    } catch (error: any) {
      this.logger.error('Erro ao atualizar categoria', error.message);
      throw new InternalServerErrorException('Erro ao atualizar categoria');
    }
  }
}
