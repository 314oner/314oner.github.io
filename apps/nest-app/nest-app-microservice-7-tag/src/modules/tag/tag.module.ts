import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';
import { Tag } from '@apps/nest-app-shared';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    TypeOrmModule.forFeature([Tag], 'database-S7'),
    ClientsModule.register([
      {
        name: 'SERVICE_TAG',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 2993,
        },
      },
    ]),
  ],
  controllers: [TagController],
  providers: [TagService],
})
export class TagModule {}
