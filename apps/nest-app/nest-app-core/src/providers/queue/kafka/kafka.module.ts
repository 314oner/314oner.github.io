import { DynamicModule, Global, Module } from '@nestjs/common';
import { KafkaService } from './kafka.service';
import {
  KafkaModuleOption,
  KafkaModuleOptionsAsync,
} from './interfaces/KafkaModuleOptions';
import { KafkaModuleOptionsProvider } from './kafka-module-options.provider';
import { KAFKA_MODULE_OPTIONS } from './constants';

@Global()
@Module({})
export class KafkaModule {
  static register(options: KafkaModuleOption[]): DynamicModule {
    const clients = (options || []).map((item) => ({
      provide: item.name,
      useValue: new KafkaService(item.options),
    }));
    return {
      module: KafkaModule,
      providers: clients,
      exports: clients,
    };
  }
  public static registerAsync(
    consumers: string[],
    connectionOptions: KafkaModuleOptionsAsync,
  ): DynamicModule {
    const clients: any[] = [];
    for (const consumer of consumers) {
      clients.push({
        provide: consumer,
        inject: [KafkaModuleOptionsProvider],
      });
    }
    return {
      module: KafkaModule,
      imports: connectionOptions?.imports || [],
      providers: [KafkaModuleOptionsProvider, ...clients],
      exports: [...clients],
    };
  }
}
