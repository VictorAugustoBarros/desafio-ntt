/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Injectable,
  Logger,
  InternalServerErrorException,
} from '@nestjs/common';
import { Produto } from '@prisma/client';
import { PrismaService } from 'src/shared/database/prisma.service';
import { toProductDto } from '../mapper/product.mapper';
import { ProductDto } from '../dto/product.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class FindAllProductsUseCase {
  private readonly logger = new Logger(FindAllProductsUseCase.name);

  constructor(private readonly prisma: PrismaService) {}

  async execute(paginationDto?: PaginationDto): Promise<ProductDto[]> {
    try {
      const { limit, offset } = paginationDto || {};

      const productsDB: Produto[] = await this.prisma.produto.findMany({
        include: {
          category: true,
        },
        take: limit,
        skip: offset,
      });

      return productsDB.map((productDB: Produto) => {
        return toProductDto(productDB);
      });
    } catch (error: any) {
      this.logger.error('Erro ao buscar produtos', error.message);
      throw new InternalServerErrorException('Erro ao buscar produtos');
    }
  }
}
