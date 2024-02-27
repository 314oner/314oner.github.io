import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';

@ApiTags('Product')
@Controller('products')
export class ProductController {
  constructor(
    private readonly productService: ProductService
  ) { }
}
