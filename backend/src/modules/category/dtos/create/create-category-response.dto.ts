import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCategoryResponse {
  @ApiProperty()
  @IsString()
  message: string;

  @ApiProperty()
  @IsString()
  uuid: string;
}
