import { OrderService } from '@app/orders/modules/order/order.service';
import { Controller, HttpStatus } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class OrderController {
  constructor(public orderService: OrderService) {}
  @MessagePattern('order.create_order')
  public async createOrder(orderBody: any): Promise<any> {
    let result: any;
    if (orderBody) {
      try {
        const order = await this.orderService.createOrder(orderBody);
        result = {
          status: HttpStatus.CREATED,
          message: 'order_create_success',
          order,
          errors: null,
        };
      } catch (e) {
        result = {
          status: HttpStatus.PRECONDITION_FAILED,
          message: 'order_create_precondition_failed',
          order: null,
          errors: e.errors,
        };
      }
    } else {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'order_create_bad_request',
        order: null,
        errors: null,
      };
    }

    return result;
  }
  @MessagePattern('order.get_order_by_id')
  public async getOrderById(params: { id: string }): Promise<any> {
    let result: any;

    if (params.id) {
      const order = await this.orderService.find(params.id);
      if (order) {
        result = {
          status: HttpStatus.OK,
          message: 'get_order_by_id_success',
          order,
        };
      } else {
        result = {
          status: HttpStatus.NOT_FOUND,
          message: 'get_order_by_id_not_found',
          order: null,
        };
      }
    } else {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'get_order_by_id_bad_request',
        order: null,
      };
    }

    return result;
  }
  @MessagePattern('order.cancel_order_by_id')
  public async cancelOrderById(params: { id: string }): Promise<any> {
    let result: any;
    if (params && params.id) {
      try {
        const order = await this.orderService.find(params);
        if (order) {
          await this.orderService.cancel(params);
          result = {
            status: HttpStatus.OK,
            message: 'order_order_by_id_success',
            order,
            errors: null,
          };
        } else {
          result = {
            status: HttpStatus.NOT_FOUND,
            message: 'order_order_by_id_not_found',
            errors: null,
          };
        }
      } catch (e) {
        result = {
          status: HttpStatus.PRECONDITION_FAILED,
          message: 'task_update_by_id_precondition_failed',
          order: null,
          errors: e.errors,
        };
      }
    } else {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'task_update_by_id_bad_request',
        errors: null,
      };
    }

    return result;
  }
  @MessagePattern({ cmd: 'order.pay_order_by_id' })
  public async payOrderById(data: any): Promise<any> {
    return this.orderService.payOrderById(data);
  }
  @MessagePattern('order.get_all_orders')
  public async getAllOrders(): Promise<any> {
    let result: any;
    try {
      const orders = await this.orderService.all();
      if (orders) {
        result = {
          status: HttpStatus.OK,
          message: 'get_all_orders_success',
          orders,
        };
      } else {
        result = {
          status: HttpStatus.NOT_FOUND,
          message: 'get_all_orders_not_found',
          orders: null,
        };
      }
      return result;
    } catch (e) {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'get_all_orders_bad_request',
        orders: null,
        errors: e.errors,
      };
    }
    return result;
  }
}
