import { IsArray, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class FindAllProducts {
  @ApiProperty()
  @IsString()
  uuid: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsString()
  categoria: string;
}

export class FindAllProductsResponse {
  @ApiProperty({
    type: FindAllProducts,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FindAllProducts)
  products: FindAllProducts[];
}
