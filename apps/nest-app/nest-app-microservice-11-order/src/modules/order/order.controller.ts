import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  @MessagePattern({ cmd: 'create' })
  create(data: unknown) {
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
  pay(data: number) {
    return this.orderService.pay(data);
  }
}
