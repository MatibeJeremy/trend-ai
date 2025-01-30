import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type SubscriptionDocument = Subscription & Document;

@Schema()
export class Subscription {
  @Prop({ type: String, unique: true, index: true, default: uuidv4 })
  id: number;

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

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription);
