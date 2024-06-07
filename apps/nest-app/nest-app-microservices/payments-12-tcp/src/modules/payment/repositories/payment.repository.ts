import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from '../enitities/payment.entity';
@Injectable()
export class PaymentRepository {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
  ) {}
  async pay(paramData: any) {
    const payment = this.paymentRepository.create();
    payment.orderId = paramData.orderData.id;
    payment.price = paramData.orderData.price;
    payment.status = Math.random() >= 0.5 ? 'CONFIRMED' : 'DECLINED';
    await this.paymentRepository.save(payment);
    return payment;
  }

  async all(): Promise<Payment[]> {
    return await this.paymentRepository.find();
  }
}
