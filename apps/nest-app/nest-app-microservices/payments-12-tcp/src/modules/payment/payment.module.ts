import { PaymentEntity } from '@app/payments/entities/payment.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoesNotExist } from '@shared/common/utils/validators/does-not-exist.validator';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentEntity])],
  controllers: [PaymentController],
  providers: [DoesNotExist, PaymentService],
  exports: [PaymentService],
})
export class PaymentModule {}
