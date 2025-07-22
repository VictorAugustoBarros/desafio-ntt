import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateProductResponse {
  @ApiProperty()
  @IsString()
  message: string;
}
