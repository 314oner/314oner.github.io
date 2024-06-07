import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoesNotExist } from '@shared/common/utils/validators/does-not-exist.validator';
import { Payment } from './enitities/payment.entity';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { PaymentRepository } from './repositories/payment.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Payment])],
  controllers: [PaymentController],
  providers: [DoesNotExist, PaymentService, PaymentRepository],
  exports: [PaymentService],
})
export class PaymentModule {}
