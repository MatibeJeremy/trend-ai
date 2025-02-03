import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type CampaignDocument = Campaign & Document;

@Schema()
export class Campaign {
  @Prop({ type: String, index: true, unique: true, default: uuidv4 })
  campaignId: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  brand: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  compensation: number;

  @Prop({ required: true })
  deadline: Date;

  @Prop({ type: String, ref: 'User', required: true })
  user_id: string;
}

export const CampaignSchema = SchemaFactory.createForClass(Campaign);
