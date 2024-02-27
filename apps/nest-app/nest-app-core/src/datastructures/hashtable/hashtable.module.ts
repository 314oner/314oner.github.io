import { DynamicModule, Module, Provider, Scope } from '@nestjs/common';
import HashTable from './hashtable';
import { HASHTABLE, HASHTABLE_OPTIONS } from './hashtable.constants';
import { HashTableOptionsFactory } from './hashtable-module.interface';
import { HashTableService } from './hashtable.service';
@Module({})
export class HashTableModule {
  public static forRoot(options): DynamicModule {
    const HashTableProvider = {
      provide: HASHTABLE,
      useValue: new HashTable(options),
      scope: Scope.TRANSIENT,
    };
    return {
      module: HashTableModule,
      exports: [HashTableService, HashTableProvider],
      providers: [HashTableProvider, HashTableService],
    };
  }
  public static forRootAsync(optionsAsync): DynamicModule {
    const HashTableProvider = {
      provide: HASHTABLE,
      useFactory: options => new HashTable(options),
      inject: [HASHTABLE_OPTIONS],
      scope: Scope.TRANSIENT,
    };

    return {
      module: HashTableModule,
      imports: optionsAsync.imports,
      exports: [HashTableService, HashTableProvider],
      providers: [
        ...this.createAsyncProviders(optionsAsync),
        HashTableProvider,
        HashTableService,
        ...(optionsAsync.extraProviders || []),
      ],
    };
  }

  private static createAsyncProviders(options): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createAsyncOptionsProvider(options)];
    }
    return [
      this.createAsyncOptionsProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass,
        scope: Scope.TRANSIENT,
      },
    ];
  }

  private static createAsyncOptionsProvider(optionsAsync): Provider {
    if (optionsAsync.useFactory) {
      return {
        provide: HASHTABLE_OPTIONS,
        useFactory: optionsAsync.useFactory,
        inject: optionsAsync.inject || [],
        scope: Scope.TRANSIENT,
      };
    }
    return {
      provide: HASHTABLE_OPTIONS,
      useFactory: async (optionsFactory: HashTableOptionsFactory) =>
        optionsFactory.createHashTableOptions(),
      inject: [optionsAsync.useExisting || optionsAsync.useClass],
      scope: Scope.TRANSIENT,
    };
  }
}
