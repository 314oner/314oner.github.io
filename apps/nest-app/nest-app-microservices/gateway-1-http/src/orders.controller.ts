import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices/client/client-proxy';
import { ApiTags } from '@nestjs/swagger';
import { ORDERS_SERVICE_TOKEN } from '@shared/common/tokens';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { map } from 'rxjs/internal/operators/map';
import { CancelOrderResponseDto } from './interfaces/order/dto/cancel-order-response.dto';
import { CreateOrderDto } from './interfaces/order/dto/create-order.dto';
import { OrderIdDto } from './interfaces/order/dto/order-id.dto';
import { IServiceOrderCreateResponse } from './interfaces/order/service-user-create-response.interface';

@ApiTags('orders')
@Controller({
  path: 'orders',
  version: '1',
})
export class OrdersController {
  constructor(
    @Inject(ORDERS_SERVICE_TOKEN)
    private readonly ordersServiceClient: ClientProxy,
  ) {}
  @Post('order/create')
  async createOrder(@Body() orderRequest: CreateOrderDto) {
    const createOrderResponse: IServiceOrderCreateResponse =
      await firstValueFrom(
        this.ordersServiceClient.send('order.create_order', orderRequest),
      );
    if (createOrderResponse.status !== HttpStatus.CREATED) {
      throw new HttpException(
        {
          message: createOrderResponse.message,
          data: null,
          errors: createOrderResponse.errors,
        },
        createOrderResponse.status,
      );
    }
    return {
      message: createOrderResponse.message,
      data: {
        order: createOrderResponse.order,
      },
      //@ts-ignore
      errors: null,
    };
  }
  @Get('order/find/:id')
  //@Authorization(true)
  public async getOrderById(@Param() params: OrderIdDto): Promise<any> {
    const orderResponse: any = await firstValueFrom(
      this.ordersServiceClient.send('order.get_order_by_id', {
        id: params.id,
      }),
    );
    if (orderResponse.status !== HttpStatus.OK) {
      throw new HttpException(
        {
          message: orderResponse.message,
          errors: orderResponse.errors,
          data: null,
        },
        orderResponse.status,
      );
    }
    return {
      message: orderResponse.message,
      order: orderResponse.order,
      errors: null,
    };
  }
  @Get('/order/all')
  public async getAllOrders(): Promise<any> {
    const orderResponse: any = await firstValueFrom(
      this.ordersServiceClient.send('order.get_all_orders', {}),
    );

    return {
      message: orderResponse.message,
      data: {
        orders: orderResponse.orders,
      },
      errors: null,
    };
  }
  @Post('order/cancel/:id')
  //@Authorization(true)
  public async cancelOrderById(
    @Param() params: OrderIdDto,
  ): Promise<CancelOrderResponseDto> {
    const orderResponse: any = await firstValueFrom(
      this.ordersServiceClient.send('order.cancel_order_by_id', {
        id: params.id,
      }),
    );
    if (orderResponse.status !== HttpStatus.OK) {
      throw new HttpException(
        {
          message: orderResponse.message,
          errors: orderResponse.errors,
          data: null,
        },
        orderResponse.status,
      );
    }
    return {
      message: orderResponse.message,
      data: {
        order: orderResponse.order,
      },
      //@ts-ignore
      errors: null,
    };
  }
  @Post('order/pay/:id')
  //@Authorization(true)
  public async payOrderById(@Param() params: OrderIdDto): Promise<any> {
    const pattern = { cmd: 'order.pay_order_by_id' };
    const payload = { id: params.id };
    return this.ordersServiceClient
      .send<string>(pattern, payload)
      .pipe(map((message: string) => ({ message })));
  }
}
