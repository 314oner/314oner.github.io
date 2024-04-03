import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs/operators';

@Injectable()
export class PaymentsService {
  constructor(
    @Inject('SERVICE_PAYMENT') private readonly clientPaymentApp: ClientProxy,
  ) {}

  //GET without parameter from API
  allPayment() {
    const pattern = { cmd: 'all' };
    const payload = {};
    return this.clientPaymentApp
      .send<string>(pattern, payload)
      .pipe(map((message: string) => ({ message })));
  }
}
