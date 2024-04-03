import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { ConfigService } from '../../config/config.service';
import { Payment } from '@apps/nest-app-shared';

@Module({
  imports: [TypeOrmModule.forFeature([Payment], 'database-S11')],
  controllers: [PaymentController],
  providers: [PaymentService, ConfigService],
})
export class PaymentModule {}
