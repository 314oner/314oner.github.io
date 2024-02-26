import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shop } from '../../models/shop.entity';
import { UserModule } from '../user/user.module';
import { PostModule } from '../post/post.module';
import { AuthorizationModule } from '../authorization/authorization.module';
import { ShopController } from './shop.controller';
import { ShopService } from './shop.service';

@Module({
  imports: [
    //TypeOrmModule.forFeature([User], 'database-MAIN'),
    TypeOrmModule.forFeature([Shop], 'database-FR'),
    //TypeOrmModule.forFeature([User], 'database-DE'),
    //TypeOrmModule.forFeature([User], 'database-GB'),
    UserModule,
    PostModule,
    AuthorizationModule,
  ],
  controllers: [ShopController],
  providers: [ShopService],
  exports: [ShopService, TypeOrmModule],
})
export class LikeModule { }
