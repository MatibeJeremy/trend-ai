import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Campaign, CampaignDocument } from './schemas/campaign.schema';
import { Model } from 'mongoose';
import { User, UserDocument } from '../users/schemas/user.schema';
import { Subscription, SubscriptionDocument } from '../subscriptions/schemas/subscription.schema';

@Injectable()
export class CampaignsService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Campaign.name) private campaignModel: Model<CampaignDocument>,
    @InjectModel(Subscription.name) private subscriptionModel: Model<SubscriptionDocument>,
  ) {}

  /**
   * Creates a new campaign.
   *
   * @param {CreateCampaignDto} createCampaignDto - Data Transfer Object containing campaign details.
   * @throws {ForbiddenException} - Throws an error if the user associated with the campaign does not exist.
   * @returns {Promise<Campaign>} - Returns a promise that resolves to the created campaign document.
   *
   * This function first checks if the user referenced in the `createCampaignDto` exists.
   * If the user is not found, it throws a `ForbiddenException`.
   * Otherwise, it creates a new campaign model instance using the provided data and saves it to the database.
   * The function returns a promise that resolves to the created campaign document.
   */
  async createCampaign(createCampaignDto: CreateCampaignDto) {
    const userExists = await this.userModel.findOne({id: createCampaignDto.user_id});
    if (!userExists) {
      throw new ForbiddenException('User tied to this resource does not exist');
    }
    const createdCampaign = new this.campaignModel(createCampaignDto);
    return createdCampaign.save();
  }

  /**
   * Fetches all campaigns that the influencer with the provided user ID is subscribed to.
   *
   * @param {string} user_id - The unique identifier of the influencer user.
   * @throws {Error} - Throws an error if there is a problem fetching subscriptions or campaigns.
   * @returns {Promise<Campaign[]>} - A promise that resolves to an array of campaign documents.
   *
   * This function retrieves all the campaigns that the influencer with the specified `user_id` is subscribed to. It performs the following steps:
   * 1. Finds all subscriptions for the given `user_id`.
   * 2. Extracts a unique set of campaign IDs from the subscriptions.
   * 3. Queries for the campaigns whose IDs are in the unique set.
   * 4. Returns an array of campaign documents.
   */
  async fetchInfluencerCampaigns(user_id: string){
    const subscriptions = await this.subscriptionModel.find({
      user_id: user_id
    }, {
      campaign_id: 1,
      _id: 0
    });
    const uniqueCampaignIds = new Set(subscriptions.map(sub => sub.campaign_id));
    const uniqueCampaignIdsArray = Array.from(uniqueCampaignIds);
    const campaigns = await this.campaignModel.find({
      campaignId: { $in: uniqueCampaignIdsArray }
    });
    return campaigns;
  }


  async getAllCampaigns(){
    const campaigns = this.campaignModel.find();

    return campaigns;
  }
}
