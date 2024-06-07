import { OrderInterface } from './order.interface';

export interface IOrderCancelResponse {
  status: number;
  message: string;
  order: OrderInterface | null;
  errors: { [key: string]: any } | null;
}
