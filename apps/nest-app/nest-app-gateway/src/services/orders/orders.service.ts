import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs/operators';

@Injectable()
export class OrdersService {
  constructor(
    @Inject('SERVICE_ORDER') private readonly clientOrderApp: ClientProxy,
    @Inject('SERVICE_PAYMENT') private readonly clientPaymentApp: ClientProxy,
  ) {}

  //POST parameter from API
  createOrder(
    postName: string = 'cartItem1',
    postPhone: string = '89852224466',
    postPrice: number = 99,
  ) {
    const pattern = { cmd: 'create' };
    const payload = { name: postName, phone: postPhone, price: postPrice };
    return this.clientOrderApp
      .send<string>(pattern, payload)
      .pipe(map((message: string) => ({ message })));
  }

  //GET parameter from API
  findOrder(paramOrderId: number) {
    const pattern = { cmd: 'find' };
    const payload = { id: paramOrderId };
    return this.clientOrderApp
      .send<string>(pattern, payload)
      .pipe(map((message: string) => ({ message })));
  }

  //GET without parameter from API
  allOrder() {
    const pattern = { cmd: 'all' };
    const payload = {};
    return this.clientOrderApp
      .send<string>(pattern, payload)
      .pipe(map((message: string) => ({ message })));
  }

  //GET parameter from API
  cancelOrder(orderId: number) {
    const pattern = { cmd: 'cancel' };
    const payload = orderId;
    return this.clientOrderApp
      .send<string>(pattern, payload)
      .pipe(map((message: string) => ({ message })));
  }

  //POST parameter from API
  payOrder(orderId: number) {
    const pattern = { cmd: 'order_pay' };
    const payload = orderId;
    return this.clientOrderApp
      .send<string>(pattern, payload)
      .pipe(map((message: string) => ({ message })));
  }
}
