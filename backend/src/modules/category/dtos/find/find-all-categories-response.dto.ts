import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CategoryDto } from '../category.dto';
import { ApiProperty } from '@nestjs/swagger';

export class FindAllCategoriesResponse {
  @ApiProperty({
    type: CategoryDto,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CategoryDto)
  categories: Omit<CategoryDto, 'id'>[];
}
