import { Module } from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { CampaignsController } from './campaigns.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Campaign, CampaignSchema } from './schemas/campaign.schema';
import { UsersModule } from '../users/users.module';
import { SubscriptionsModule } from '../subscriptions/subscriptions.module';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Campaign.name, schema: CampaignSchema}]),
    UsersModule, SubscriptionsModule
  ],
  controllers: [CampaignsController],
  providers: [CampaignsService]
})
export class CampaignsModule {}
