/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Injectable,
  Logger,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.service';
import { ProductDto } from '../dto/product.dto';
import { toProductDto } from '../mapper/product.mapper';

export type UpdateProductParams = {
  uuid: string;
  name?: string;
  description?: string;
  price?: number;
  categoryId?: number;
};

@Injectable()
export class UpdateProductUseCase {
  private readonly logger = new Logger(UpdateProductUseCase.name);

  constructor(private readonly prisma: PrismaService) {}

  async execute(params: UpdateProductParams): Promise<ProductDto> {
    const { uuid, name, description, price, categoryId } = params;

    try {
      const updatedProduct = await this.prisma.produto.update({
        where: { uuid },
        data: {
          ...(name !== undefined && { name }),
          ...(description !== undefined && { description }),
          ...(price !== undefined && { price }),
          ...(categoryId !== undefined && { categoryId }),
        },
        include: {
          category: true,
        },
      });

      return toProductDto(updatedProduct);
    } catch (error: any) {
      this.logger.error('Erro ao atualizar produto', error.message);
      throw new InternalServerErrorException('Erro ao atualizar produto');
    }
  }
}
