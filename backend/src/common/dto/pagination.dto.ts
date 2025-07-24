import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsPositive, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class PaginationDto {
  @ApiPropertyOptional()
  @IsPositive()
  @Transform(({ value }) => Number(value))
  @IsOptional()
  limit?: number;

  @ApiPropertyOptional()
  @Min(0)
  @Transform(({ value }) => Number(value))
  @IsOptional()
  offset?: number;
}
