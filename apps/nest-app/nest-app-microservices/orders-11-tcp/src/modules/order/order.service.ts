/* eslint-disable no-underscore-dangle */
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { PAYMENTS_SERVICE_TOKEN } from '@shared/common/tokens';
import { map } from 'rxjs';
import { Repository, UpdateResult } from 'typeorm';
import { OrderEntity } from './entities/order.entity';
@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private orderRepository: Repository<OrderEntity>,
    @Inject(PAYMENTS_SERVICE_TOKEN)
    private readonly clientPaymentApp: ClientProxy,
  ) {}
  async createOrder(payload: { name: any; phone: any; price: number }) {
    const order = await this.orderRepository.create();
    order.name = payload.name;
    order.phone = payload.phone;
    order.price = payload.price;
    await this.orderRepository.save(order);

    return order;
  }

  async find(params: any) {
    const { id } = params;
    const order = await this.orderRepository.findOne({
      where: { id: id },
      //relations: ['userLikes'],
    });
    if (order) {
      return order;
    } else {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }
  }

  async all(): Promise<OrderEntity[]> {
    return await this.orderRepository.find();
  }

  async cancel(id: any): Promise<UpdateResult> {
    const order = await this.find(id);

    if (!order) {
      throw new RpcException('Order not found.');
    }
    return this.orderRepository.update(order.id, {
      status: 'CANCELED',
      updateTimestamp: new Date(),
    });
  }

  async confirm(id: any, paymentData: any) {
    const order = await this.find(id);

    if (!order) {
      throw new RpcException('Order not found.');
    }

    return this.orderRepository.update(order.id, {
      status: paymentData.status === 'DECLINED' ? 'CANCELED' : 'CONFIRMED',
      paymentId: paymentData.id,
    });
  }

  async pay(id: any, updateOrderDto: any): Promise<OrderEntity> {
    await this.find(id);

    return this.orderRepository.save({ id, ...updateOrderDto });
  }

  async payOrderById(id: any) {
    const order = await this.find(id);
    if (!order) {
      throw new RpcException('Order not found.');
    }
    const pattern = { cmd: 'payment.order_pay' };
    const payload = { id: id, orderData: order };
    const updateOrderDto = { status: 'DELIVERED', updateTimestamp: new Date() };
    return this.clientPaymentApp.send<string>(pattern, payload).pipe(
      map((message: any) => {
        this.confirm(id, message);

        switch (message.status) {
          case 'DECLINED':
            break;
          default:
            setTimeout(() => {
              this.pay(id, updateOrderDto);
              this.orderRepository.update(
                { id },
                { status: 'DELIVERED', updateTimestamp: new Date() },
              );
            }, 5000);
            break;
        }

        return message;
      }),
    );
  }
}
