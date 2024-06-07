import {
  EventsConfigType,
  eventsConfig,
} from '@app/events/config/events.config';
import { EventsController } from '@app/events/modules/events/events.controller';
import { EventsService } from '@app/events/modules/events/events.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  AUTH_SERVICE_TOKEN,
  PAYMENTS_SERVICE_TOKEN,
} from '@shared/common/tokens';
import { DoesNotExist } from '@shared/common/utils/validators/does-not-exist.validator';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: AUTH_SERVICE_TOKEN,
        imports: [ConfigModule],
        inject: [eventsConfig.KEY],
        useFactory: (config: EventsConfigType) => ({
          transport: Transport.TCP,
          options: {
            host: config.authServiceHost,
            port: config.authServiceTcpPort,
          },
        }),
      },
      {
        name: PAYMENTS_SERVICE_TOKEN,
        imports: [ConfigModule],
        inject: [eventsConfig.KEY],
        useFactory: (config: EventsConfigType) => ({
          transport: Transport.TCP,
          options: {
            host: config.paymentsServiceHost,
            port: config.paymentsServiceTcpPort,
          },
        }),
      },
    ]),
    TypeOrmModule.forFeature([]),
  ],
  controllers: [EventsController],
  providers: [LocalStrategy, DoesNotExist, EventsService],
  exports: [EventsService],
})
export class EventsModule {}
