import { Controller, HttpStatus } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PaymentService } from './payment.service';
@Controller()
export class PaymentController {
  constructor(private paymentService: PaymentService) {}
  @MessagePattern({ cmd: 'payment.order_pay' })
  async pay(data: unknown) {
    let result: any;
    try {
      const payments = await this.paymentService.pay(data);
      if (payments) {
        result = {
          status: HttpStatus.OK,
          message: 'post_get_hot_posts_success',
          payments,
        };
      } else {
        result = {
          status: HttpStatus.NOT_FOUND,
          message: 'post_get_hot_posts_not_found',
          payments: null,
        };
      }
      return result;
    } catch (e) {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'post_get_hot_posts_bad_request',
        payments: null,
        errors: e.errors,
      };
    }
    return result;
  }
  @MessagePattern('payment.get_all_payments')
  public async getAllPayments(): Promise<any> {
    let result: any;
    try {
      const payments = await this.paymentService.getAllPayments();
      if (payments) {
        result = {
          status: HttpStatus.OK,
          message: 'post_get_hot_posts_success',
          payments,
        };
      } else {
        result = {
          status: HttpStatus.NOT_FOUND,
          message: 'post_get_hot_posts_not_found',
          payments: null,
        };
      }
      return result;
    } catch (e) {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'post_get_hot_posts_bad_request',
        payments: null,
        errors: e.errors,
      };
    }
    return result;
  }
}
