import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ShopService } from './shop.service';

@ApiTags('Shop')
@Controller('shops')
export class ShopController {
  constructor(
    private readonly shopService: ShopService
  ) { }
}
