import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly orderService: PaymentService) {}
  @MessagePattern({ cmd: 'pay' })
  pay(data: unknown) {
    return this.orderService.pay(data);
  }

  @MessagePattern({ cmd: 'all' })
  all() {
    return this.orderService.all();
  }
}
