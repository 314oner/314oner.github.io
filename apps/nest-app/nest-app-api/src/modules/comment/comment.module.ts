import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { PostModule } from '../post/post.module';
import { AuthorizationModule } from '../authorization/authorization.module';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { Comment } from '../../models/comment.entity'

@Module({
  imports: [
    //TypeOrmModule.forFeature([User], 'database-MAIN'),
    TypeOrmModule.forFeature([Comment], 'database-FR'),
    //TypeOrmModule.forFeature([User], 'database-DE'),
    //TypeOrmModule.forFeature([User], 'database-GB'),
    UserModule,
    PostModule,
    AuthorizationModule,
  ],
  controllers: [CommentController],
  providers: [CommentService],
  exports: [CommentService, TypeOrmModule],
})
export class CommentModule { }
