import { OrderInterface } from '@app/orders/modules/order/interfaces/order.interface';

export interface IServiceOrderCreateResponse {
  status: number;
  message: string;
  order: OrderInterface | null;
  errors: { [key: string]: any };
}
