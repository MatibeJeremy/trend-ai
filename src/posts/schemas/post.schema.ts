import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type PostDocument = Post & Document;

export enum Status {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  PENDING = 'PENDING',
  DELETED = 'DELETED',
}

@Schema()
export class Post {
  @Prop({ type: String, unique: true, index: true, default: uuidv4 })
  id: number;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, unique: true })
  content: string;

  @Prop({ required: true, default: Status.PENDING })
  status: Status;

  @Prop({
    type:String,
    ref: 'Campaign',
    required: true,
  })
  campaign_id: string;

  @Prop({ type: String, ref: 'User', required: true })
  user_id: string;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post);
