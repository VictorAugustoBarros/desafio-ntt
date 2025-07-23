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
export class DeleteProductUseCase {
  private readonly logger = new Logger(DeleteProductUseCase.name);

  constructor(private readonly prisma: PrismaService) {}

  async execute(uuid: string): Promise<ProductDto> {
    try {
      const productDB: Produto = await this.prisma.produto.delete({
        where: { uuid },
      });

      return toProductDto(productDB);
    } catch (error: any) {
      this.logger.error('Erro ao deletar produto', error.message);
      throw new InternalServerErrorException('Erro ao deletar produto');
    }
  }
}
