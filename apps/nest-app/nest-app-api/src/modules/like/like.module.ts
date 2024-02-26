import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Like } from '../../models/like.entity';
import { UserModule } from '../user/user.module';
import { PostModule } from '../post/post.module';
import { AuthorizationModule } from '../authorization/authorization.module';
import { LikeController } from './like.controller';
import { LikeService } from './like.service';

@Module({
  imports: [
    //TypeOrmModule.forFeature([User], 'database-MAIN'),
    TypeOrmModule.forFeature([Like], 'database-FR'),
    //TypeOrmModule.forFeature([User], 'database-DE'),
    //TypeOrmModule.forFeature([User], 'database-GB'),
    UserModule,
    PostModule,
    AuthorizationModule,
  ],
  controllers: [LikeController],
  providers: [LikeService],
  exports: [LikeService, TypeOrmModule],
})
export class LikeModule { }
