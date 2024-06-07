import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from './enitities/payment.entity';
@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private paymentRepository2: Repository<Payment>,
  ) {}
  async pay(paramData: any) {
    const payment = this.paymentRepository2.create();
    payment.orderId = paramData.orderData.id;
    payment.price = paramData.orderData.price;
    payment.status = Math.random() >= 0.5 ? 'CONFIRMED' : 'DECLINED';
    await this.paymentRepository2.save(payment);
    return payment;
  }

  async getAllPayments(): Promise<Payment[]> {
    return await this.paymentRepository2.find();
  }
}
