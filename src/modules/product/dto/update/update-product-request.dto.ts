import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateProductRequest {
  @ApiProperty()
  @IsString()
  name: string;
}
