import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';
import { ObjectId } from 'mongodb';

export class CreateSubscriptionDto {
  @IsNotEmpty()
  @IsString()
  campaign_id: string;

  @IsNotEmpty()
  @IsString()
  user_id: string;
}
