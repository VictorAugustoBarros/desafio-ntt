import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { CreateCategoryRequest } from '../dtos/create/create-category-request.dto';
import { CreateCategoryResponse } from '../dtos/create/create-category-response.dto';
import { UpdateCategoryRequest } from '../dtos/update/update-category-request.dto';
import { CreateCategoryHandler } from '../handlers/create-category.handler';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CategoryExceptionFilter } from '../exceptions/category-exception.filter';
import { DeleteCategoryResponse } from '../dtos/delete/delete-category-response.dto';
import { FindCategoryResponse } from '../dtos/find/find-category-response.dto';
import { UpdateCategoryResponse } from '../dtos/update/update-category-response.dto';
import { DeleteCategoryHandler } from '../handlers/delete-category.handler';
import { UpdateCategoryHandler } from '../handlers/update-category.handler';
import { FindCategoryHandler } from '../handlers/find-category.handler';
import { FindAllCategoriesResponse } from '../dtos/find/find-all-categories-response.dto';
import { FindAllCategoriesHandler } from '../handlers/find-all-categories.handler';

@ApiTags('Categories')
@Controller('categories')
@UseFilters(CategoryExceptionFilter)
export class CategoryController {
  constructor(
    private readonly createCategoryHandler: CreateCategoryHandler,
    private readonly findCategoryHandler: FindCategoryHandler,
    private readonly findAllCategoriesHandler: FindAllCategoriesHandler,
    private readonly updateCategoryHandler: UpdateCategoryHandler,
    private readonly deleteCategoryHandler: DeleteCategoryHandler,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Fetch all categories' })
  @ApiResponse({
    status: 200,
    description: 'List of category',
    type: FindAllCategoriesResponse,
  })
  findAll(): Promise<FindAllCategoriesResponse> {
    return this.findAllCategoriesHandler.execute();
  }

  @Get(':uuid')
  @ApiOperation({ summary: 'Fetch a category by UUID' })
  @ApiParam({
    name: 'uuid',
    description: 'Category UUID',
    example: '76c81ac4-c2df-4f38-81c4-fa7e56625606',
  })
  @ApiResponse({
    status: 200,
    description: 'Category successfully found',
    type: FindCategoryResponse,
  })
  findById(@Param('uuid') uuid: string): Promise<FindCategoryResponse> {
    return this.findCategoryHandler.execute(uuid);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new category' })
  @ApiBody({
    description: 'Category information',
    type: CreateCategoryRequest,
    examples: {
      example: {
        summary: 'Simple example',
        value: {
          name: 'Test category',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Category created successfully',
    type: CreateCategoryResponse,
  })
  create(
    @Body() request: CreateCategoryRequest,
  ): Promise<CreateCategoryResponse> {
    return this.createCategoryHandler.execute(request);
  }

  @Put(':uuid')
  @ApiOperation({ summary: 'Update an existing category' })
  @ApiParam({
    name: 'uuid',
    description: 'Category UUID',
    example: '76c81ac4-c2df-4f38-81c4-fa7e56625606',
  })
  @ApiBody({
    description: 'Category update data',
    type: UpdateCategoryRequest,
  })
  @ApiResponse({
    status: 200,
    description: 'Category updated successfully',
    type: UpdateCategoryResponse,
  })
  update(
    @Param('uuid') uuid: string,
    @Body() request: UpdateCategoryRequest,
  ): Promise<UpdateCategoryResponse> {
    return this.updateCategoryHandler.execute(uuid, request);
  }

  @Delete(':uuid')
  @ApiOperation({ summary: 'Delete a category by UUID' })
  @ApiParam({
    name: 'uuid',
    description: 'Category UUID',
    example: '76c81ac4-c2df-4f38-81c4-fa7e56625606',
  })
  @ApiResponse({
    status: 200,
    description: 'Category deleted successfully',
    type: DeleteCategoryResponse,
  })
  delete(@Param('uuid') uuid: string): Promise<DeleteCategoryResponse> {
    return this.deleteCategoryHandler.execute(uuid);
  }
}
