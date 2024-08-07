import { TagEntity } from '@app/tags/entities/tag.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoesNotExist } from '@shared/common/utils/validators/does-not-exist.validator';
import { TagRepository } from './repositories/tag.repository';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';

@Module({
  imports: [TypeOrmModule.forFeature([TagEntity])],
  controllers: [TagController],
  providers: [DoesNotExist, TagService, TagRepository],
  exports: [TagService],
})
export class TagModule {}
