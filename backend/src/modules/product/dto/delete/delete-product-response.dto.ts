import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class DeleteProductResponse {
  @ApiProperty()
  @IsString()
  message: string;
}
