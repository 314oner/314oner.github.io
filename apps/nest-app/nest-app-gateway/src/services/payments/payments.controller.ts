import { Controller, Get } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('payments')
@ApiTags('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  //#API orderService - get all orders
  @Get('pay/all')
  allPayment() {
    return this.paymentsService.allPayment();
  }
}
