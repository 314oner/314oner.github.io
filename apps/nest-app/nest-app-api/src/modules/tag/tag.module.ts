import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';
import { Tag } from '../../models/tag.entity';

@Module({
  imports: [
    //TypeOrmModule.forFeature([User], 'database-MAIN'),
    TypeOrmModule.forFeature([Tag], 'database-FR'),
    //TypeOrmModule.forFeature([User], 'database-DE'),
    //TypeOrmModule.forFeature([User], 'database-GB'),
  ],
  controllers: [TagController],
  providers: [TagService],
  exports: [TagService, TypeOrmModule],
})
export class TagModule { }
