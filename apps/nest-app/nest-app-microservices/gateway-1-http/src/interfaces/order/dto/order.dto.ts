import { IsNotEmpty } from 'class-validator';

export class OrderCreateBodyDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  price: number;
}

export class OrderFindBodyDto {
  @IsNotEmpty()
  paramOrderId: number;
}

export class OrderCancelBodyDto {
  @IsNotEmpty()
  orderId: number;
}

export class OrderPayBodyDto {
  @IsNotEmpty()
  orderId: number;
}
