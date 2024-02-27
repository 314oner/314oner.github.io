import { HttpException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Shop } from '../../models/shop.entity';

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(Shop, 'database-FR')
    private readonly likeRepository: Repository<Shop>
  ) { }
}
