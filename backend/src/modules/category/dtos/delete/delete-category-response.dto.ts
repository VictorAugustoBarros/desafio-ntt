import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class DeleteCategoryResponse {
  @ApiProperty()
  @IsString()
  message: string;
}
