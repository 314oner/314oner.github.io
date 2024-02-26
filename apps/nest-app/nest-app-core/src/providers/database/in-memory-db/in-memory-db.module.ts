import { DynamicModule, Module } from '@nestjs/common';

import { InMemoryDBConfig } from './in-memory-db-config';
import { InMemoryDBService } from './in-memory-db.service';
import { createInMemoryDBForRootProviders } from './in-memory-db-for-root.providers';
import { createInMemoryDBForFeatureProviders } from './in-memory-db-for-feature.providers';
@Module({
  providers: [InMemoryDBService],
  exports: [InMemoryDBService],
})
export class InMemoryDBModule {
  public static forRoot(config: Partial<InMemoryDBConfig> = {}): DynamicModule {
    const providers = createInMemoryDBForRootProviders(config);
    return {
      module: InMemoryDBModule,
      providers,
      exports: providers,
    };
  }

  public static forFeature(
    featureName: string,
    config: Partial<InMemoryDBConfig> = {},
  ): DynamicModule {
    const providers = createInMemoryDBForFeatureProviders(featureName, config);
    return {
      module: InMemoryDBModule,
      providers,
      exports: providers,
    };
  }
}
