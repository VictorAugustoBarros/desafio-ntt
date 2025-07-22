import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateCategoryResponse {
  @ApiProperty()
  @IsString()
  message: string;
}
