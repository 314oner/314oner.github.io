import {
  OrdersConfigType,
  ordersConfig,
} from '@app/orders/config/orders.config';
import { OrderEntity } from '@app/orders/modules/order/entities/order.entity';
import { OrderController } from '@app/orders/modules/order/order.controller';
import { OrderService } from '@app/orders/modules/order/order.service';
import { OrderRepository } from '@app/orders/modules/order/repositories/order.repository';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PAYMENTS_SERVICE_TOKEN } from '@shared/common/tokens';
import { DoesNotExist } from '@shared/common/utils/validators/does-not-exist.validator';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: PAYMENTS_SERVICE_TOKEN,
        imports: [ConfigModule],
        inject: [ordersConfig.KEY],
        useFactory: (config: OrdersConfigType) => ({
          transport: Transport.TCP,
          options: {
            host: config.paymentsServiceHost,
            port: config.paymentsServiceTcpPort,
          },
        }),
      },
    ]),
    TypeOrmModule.forFeature([OrderEntity]),
  ],
  controllers: [OrderController],
  providers: [DoesNotExist, OrderRepository, OrderService],
  exports: [OrderService],
})
export class OrderModule {}
