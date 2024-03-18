import { Controller, HttpStatus, Inject } from '@nestjs/common';
import { MessagePattern, ClientProxy } from '@nestjs/microservices';

import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
  ) { }
  @MessagePattern({ cmd: 'create' })
  create(data: any) {
    return this.orderService.createOrder(data);
  }

  @MessagePattern({ cmd: 'find' })
  find(paramId: string) {
    return this.orderService.find(paramId);
  }

  @MessagePattern({ cmd: 'all' })
  all() {
    return this.orderService.all();
  }

  @MessagePattern({ cmd: 'cancel' })
  cancel(paramId: number) {
    return this.orderService.cancel(paramId);
  }

  @MessagePattern({ cmd: 'order_pay' })
  pay(data: any) {
    return this.orderService.pay(data);
  }
}
