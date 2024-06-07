import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices/client/client-proxy';
import { ApiTags } from '@nestjs/swagger';
import { PAYMENTS_SERVICE_TOKEN } from '@shared/common/tokens';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';

@ApiTags('payments')
@Controller({
  path: 'payments',
  version: '1',
})
export class PaymentsController {
  constructor(
    @Inject(PAYMENTS_SERVICE_TOKEN)
    private readonly paymentsServiceClient: ClientProxy,
  ) {}

  @Get('/pay/all')
  public async getAllPayments(): Promise<any> {
    const paymentsResponse: any = await firstValueFrom(
      this.paymentsServiceClient.send('payment.get_all_payments', {}),
    );

    return {
      message: paymentsResponse.message,
      data: {
        payments: paymentsResponse.payments,
      },
      errors: null,
    };
  }
}
