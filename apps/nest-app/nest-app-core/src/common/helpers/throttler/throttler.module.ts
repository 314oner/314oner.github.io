import { Module, DynamicModule, Provider, Global } from '@nestjs/common';
import {
  ThrottlerModuleOptions,
  ThrottlerAsyncOptions,
  ThrottlerOptionsFactory,
} from './throttler-module-options.interface';
import { THROTTLER_OPTIONS } from './throttler.constants';
import {
  createThrottlerProviders,
  ThrottlerStorageProvider,
} from './throttler.providers';
@Global()
@Module({})
export class ThrottlerModule {
  static forRoot(options: ThrottlerModuleOptions = {}): DynamicModule {
    const providers = [
      ...createThrottlerProviders(options),
      ThrottlerStorageProvider,
    ];
    return {
      module: ThrottlerModule,
      providers,
      exports: providers,
    };
  }
  static forRootAsync(options: ThrottlerAsyncOptions): DynamicModule {
    const providers = [
      ...this.createAsyncProviders(options),
      ThrottlerStorageProvider,
    ];
    return {
      module: ThrottlerModule,
      imports: options.imports || [],
      providers,
      exports: providers,
    };
  }

  private static createAsyncProviders(
    options: ThrottlerAsyncOptions
  ): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createAsyncOptionsProvider(options)];
    }
    return [
      this.createAsyncOptionsProvider(options),
      {
        //@ts-ignore
        provide: options.useClass,
        //@ts-ignore
        useClass: options.useClass,
      },
    ];
  }

  private static createAsyncOptionsProvider(
    options: ThrottlerAsyncOptions
  ): Provider {
    if (options.useFactory) {
      return {
        provide: THROTTLER_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }
    return {
      provide: THROTTLER_OPTIONS,
      useFactory: async (optionsFactory: ThrottlerOptionsFactory) =>
        await optionsFactory.createThrottlerOptions(),
      //@ts-ignore
      inject: [options.useExisting || options.useClass],
    };
  }
}
