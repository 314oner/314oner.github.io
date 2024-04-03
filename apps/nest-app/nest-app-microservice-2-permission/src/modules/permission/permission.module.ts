import { Module } from '@nestjs/common';
import { ConfigService } from './config/config.service';
import { ConfirmedStrategyService } from './confirmed-strategy.service';
import { PermissionController } from './permission.controller';

@Module({
  imports: [],
  controllers: [PermissionController],
  providers: [ConfigService, ConfirmedStrategyService],
})
export class PermissionModule {}
