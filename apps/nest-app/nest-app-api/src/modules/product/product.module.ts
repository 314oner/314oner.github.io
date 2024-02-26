import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../../models/product.entity';
import { UserModule } from '../user/user.module';
import { PostModule } from '../post/post.module';
import { AuthorizationModule } from '../authorization/authorization.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [
    //TypeOrmModule.forFeature([User], 'database-MAIN'),
    TypeOrmModule.forFeature([Product], 'database-FR'),
    //TypeOrmModule.forFeature([User], 'database-DE'),
    //TypeOrmModule.forFeature([User], 'database-GB'),
    UserModule,
    PostModule,
    AuthorizationModule,
  ],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService, TypeOrmModule],
})
export class LikeModule { }
