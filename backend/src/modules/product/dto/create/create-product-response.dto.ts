import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateProductResponse {
  @ApiProperty()
  @IsString()
  message: string;

  @ApiProperty()
  @IsString()
  uuid: string;
}
