import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseFilters,
  Query,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ProductExceptionFilter } from '../exceptions/product-exception.filter';
import { FindAllProductsHandler } from '../handlers/find-all-products.handler';
import { FindAllProductsResponse } from '../dto/find/find-all-products-response.dto';
import { CreateProductRequest } from '../dto/create/create-product-request.dto';
import { CreateProductResponse } from '../dto/create/create-product-response.dto';
import { CreateProductHandler } from '../handlers/create-product.handler';
import { FindProductResponse } from '../dto/find/find-product-response.dto';
import { FindProductHandler } from '../handlers/find-product.handler';
import { DeleteProductResponse } from '../dto/delete/delete-product-response.dto';
import { UpdateProductRequest } from '../dto/update/update-product-request.dto';
import { UpdateProductResponse } from '../dto/update/update-product-response.dto';
import { DeleteProductHandler } from '../handlers/delete-product.handler';
import { UpdateProductHandler } from '../handlers/update-product.handler';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@ApiTags('Products')
@Controller('products')
@UseFilters(ProductExceptionFilter)
export class ProductController {
  constructor(
    private readonly findAllProductsHandler: FindAllProductsHandler,
    private readonly createProductHandler: CreateProductHandler,
    private readonly findProductHandler: FindProductHandler,
    private readonly updateProductHandler: UpdateProductHandler,
    private readonly deleteProductHandler: DeleteProductHandler,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Fetch all products' })
  @ApiResponse({
    status: 200,
    description: 'List of products',
    type: FindAllProductsResponse,
  })
  findAll(
    @Query() paginationDto: PaginationDto,
  ): Promise<FindAllProductsResponse> {
    return this.findAllProductsHandler.execute(paginationDto);
  }

  @Get(':uuid')
  @ApiOperation({ summary: 'Fetch a product by UUID' })
  @ApiParam({
    name: 'uuid',
    description: 'Product UUID',
    example: 'd0e08ad3-5c72-4b50-90f9-0f5d6851c0d2',
  })
  @ApiResponse({
    status: 200,
    description: 'Product successfully found',
    type: FindProductResponse,
  })
  findByUuid(@Param('uuid') uuid: string): Promise<FindProductResponse> {
    return this.findProductHandler.execute(uuid);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new product' })
  @ApiBody({
    description: 'Product information',
    type: CreateProductRequest,
    examples: {
      example: {
        summary: 'Simple example',
        value: {
          name: 'Test product',
          description: 'Product description',
          price: 10.5,
          categoryUuid: 'be9c7882-ad24-400b-a48c-4a5ea7a3276c',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Product created successfully',
    type: CreateProductResponse,
  })
  create(
    @Body() request: CreateProductRequest,
  ): Promise<CreateProductResponse> {
    return this.createProductHandler.execute(request);
  }

  @Put(':uuid')
  @ApiOperation({ summary: 'Update an existing product' })
  @ApiParam({
    name: 'uuid',
    description: 'Product UUID',
    example: 'd0e08ad3-5c72-4b50-90f9-0f5d6851c0d2',
  })
  @ApiBody({
    description: 'Product update data',
    type: UpdateProductRequest,
  })
  @ApiResponse({
    status: 200,
    description: 'Product updated successfully',
    type: UpdateProductResponse,
  })
  update(
    @Param('uuid') uuid: string,
    @Body() request: UpdateProductRequest,
  ): Promise<UpdateProductResponse> {
    return this.updateProductHandler.execute(uuid, request);
  }

  @Delete(':uuid')
  @ApiOperation({ summary: 'Delete a product by UUID' })
  @ApiParam({
    name: 'uuid',
    description: 'Product UUID',
    example: 'd0e08ad3-5c72-4b50-90f9-0f5d6851c0d2',
  })
  @ApiResponse({
    status: 200,
    description: 'Product deleted successfully',
    type: DeleteProductResponse,
  })
  delete(@Param('uuid') uuid: string): Promise<DeleteProductResponse> {
    return this.deleteProductHandler.execute(uuid);
  }
}
