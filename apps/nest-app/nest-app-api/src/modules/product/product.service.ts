import { HttpException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../../models/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product, 'database-FR')
    private readonly likeRepository: Repository<Product>
  ) { }
}
