/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Injectable,
  Logger,
  InternalServerErrorException,
} from '@nestjs/common';
import { Produto } from '@prisma/client';
import { PrismaService } from 'src/shared/database/prisma.service';
import { ProductDto } from '../dto/product.dto';
import { toProductDto } from '../mapper/product.mapper';

@Injectable()
export class FindProductByNameUseCase {
  private readonly logger = new Logger(FindProductByNameUseCase.name);

  constructor(private readonly prisma: PrismaService) {}

  async execute(name: string): Promise<ProductDto | null> {
    try {
      const productDB: Produto | null = await this.prisma.produto.findFirst({
        where: { name },
        include: {
          category: true,
        },
      });

      if (!productDB) {
        return null;
      }

      return toProductDto(productDB);
    } catch (error: any) {
      this.logger.error('Erro ao buscar produto por nome', error.message);
      throw new InternalServerErrorException('Erro ao buscar produto por nome');
    }
  }
}
