import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('orders')
@ApiTags('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  //#API orderService - create order
  @Post('order/create')
  createOrder(
    @Body('name') orderName: string,
    @Body('phone') orderPhone: string,
    @Body('price') orderPrice: number,
  ) {
    return this.ordersService.createOrder(orderName, orderPhone, orderPrice);
  }

  //#API orderService - get specific order details
  @Get('order/find/:id')
  findOrder(@Param('id') paramOrderId: number) {
    return this.ordersService.findOrder(paramOrderId);
  }

  //#API orderService - get all orders
  @Get('order/all')
  allOrder() {
    return this.ordersService.allOrder();
  }

  //#API orderService - cancel order
  @Post('order/cancel')
  cancelOrder(@Body('id') orderId: number) {
    return this.ordersService.cancelOrder(orderId);
  }

  //#API orderService - confirm order, pay order & update status delivery
  @Post('order/pay')
  payOrder(@Body('id') orderId: number) {
    return this.ordersService.payOrder(orderId);
  }
}
