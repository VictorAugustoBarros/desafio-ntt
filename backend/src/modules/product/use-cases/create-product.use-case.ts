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
export class CreateProductUseCase {
  private readonly logger = new Logger(CreateProductUseCase.name);

  constructor(private readonly prisma: PrismaService) {}

  async execute(
    name: string,
    description: string,
    price: number,
    categoryId: number,
  ): Promise<ProductDto> {
    try {
      const categoryDB: Produto = await this.prisma.produto.create({
        data: {
          name,
          description,
          price,
          categoryId,
        },
      });

      return toProductDto(categoryDB);
    } catch (error: any) {
      this.logger.error('Erro ao criar produto', error.message);
      throw new InternalServerErrorException('Erro ao criar produto');
    }
  }
}
