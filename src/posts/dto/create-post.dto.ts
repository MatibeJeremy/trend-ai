import { IsNotEmpty, IsString, IsMongoId, IsOptional } from 'class-validator';
import { ObjectId } from 'mongodb';
import { Status } from '../schemas/post.schema';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsMongoId()
  campaign_id: ObjectId;

  @IsNotEmpty()
  @IsMongoId()
  user_id: ObjectId;

  @IsString()
  @IsOptional()
  status?: Status;
}
