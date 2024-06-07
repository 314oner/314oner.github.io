import { OrderInterface } from '@app/orders/modules/order/interfaces';

export class CancelOrderResponseDto {
  message: string;
  data: {
    order: OrderInterface;
  };
  errors: { [key: string]: any };
}
