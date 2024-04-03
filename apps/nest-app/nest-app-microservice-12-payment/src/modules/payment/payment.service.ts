import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '../../config/config.service';
import { Repository } from 'typeorm';
import { Payment } from '@apps/nest-app-shared';
const logger = new Logger();

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment, 'database-S11')
    private paymentRepository: Repository<Payment>,
    private readonly configService: ConfigService,
  ) {}
  //To do payment
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async pay(paramData: any) {
    logger.log('Payment for orderId: ' + paramData.orderData.id);

    const payment = this.paymentRepository.create();
    payment.orderId = paramData.orderData.id;
    payment.price = paramData.orderData.price;
    payment.status = Math.random() >= 0.5 ? 'CONFIRMED' : 'DECLINED';
    await this.paymentRepository.save(payment);
    logger.log('Payment status: ' + payment.status);

    return payment;
  }

  //To get all order list
  async all(): Promise<Payment[]> {
    logger.log('Return all order');

    return await this.paymentRepository.find();
  }
}
