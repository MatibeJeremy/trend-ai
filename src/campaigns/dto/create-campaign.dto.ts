import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateCampaignDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsNumber()
  @IsNotEmpty()
  compensation: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @Transform(({ value }) => new Date(value))
  @IsDate()
  @IsNotEmpty()
  deadline: Date;

  @IsString()
  @IsNotEmpty()
  user_id: string;
}
