import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('campaigns')
export class CampaignsController {
  constructor(private readonly campaignsService: CampaignsService) {}

  @Post()
  createCampaign(@Body() createCampaignDto: CreateCampaignDto) {
    return this.campaignsService.createCampaign(createCampaignDto);
  }

  @Get('influencer/:user_id')
  findInfluencerCampaigns(@Param('user_id') user_id: string) {
    return this.campaignsService.fetchInfluencerCampaigns(user_id);
  }

  @Get('influencer')
  getAllCampaigns() {
    return this.campaignsService.getAllCampaigns();
  }
}
