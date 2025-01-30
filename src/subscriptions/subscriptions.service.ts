import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Subscription,
  SubscriptionDocument,
} from './schemas/subscription.schema';

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectModel(Subscription.name)
    private subscriptionModel: Model<SubscriptionDocument>,
  ) {}
  async create(createSubscriptionDto: CreateSubscriptionDto) {
    const existingSubscription = await this.subscriptionModel.findOne({
      campaign_id: createSubscriptionDto.campaign_id,
      user_id:createSubscriptionDto.user_id,
    });

    if (existingSubscription) {
      throw new ForbiddenException('User already subscribed to this campaign');
    }
      const createdSubscription = new this.subscriptionModel(createSubscriptionDto);
      return createdSubscription.save();
  }

  findAll() {
    return `This action returns all subscriptions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subscription`;
  }

  update(id: number, updateSubscriptionDto: UpdateSubscriptionDto) {
    return `This action updates a #${id} subscription`;
  }

  remove(id: number) {
    return `This action removes a #${id} subscription`;
  }
}
