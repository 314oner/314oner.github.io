import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { ConfigService } from '../../config/config.service';
import { Order } from '@apps/nest-app-shared';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order], 'database-S11'),
    ClientsModule.register([
      {
        name: 'SERVICE_PAYMENT',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 2988,
        },
      },
    ]),
  ],
  controllers: [OrderController],
  providers: [OrderService, ConfigService],
})
export class OrderModule {}
