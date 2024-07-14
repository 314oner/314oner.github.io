import { PaymentEntity } from '@app/payments/entities/payment.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(PaymentEntity)
    private paymentRepository: Repository<PaymentEntity>,
  ) {}
  async pay(paramData: any) {
    const payment = this.paymentRepository.create();
    payment.orderId = paramData.orderData.id;
    payment.price = paramData.orderData.price;
    payment.status = Math.random() >= 0.5 ? 'CONFIRMED' : 'DECLINED';
    await this.paymentRepository.save(payment);
    return payment;
  }

  async getAllPayments(): Promise<PaymentEntity[]> {
    return await this.paymentRepository.find();
  }
}
