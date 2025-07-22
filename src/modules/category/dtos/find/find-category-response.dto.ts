import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CategoryDto } from '../category.dto';

export class FindCategoryResponse {
  @ApiProperty()
  @IsString()
  name: CategoryDto['name'];
}
