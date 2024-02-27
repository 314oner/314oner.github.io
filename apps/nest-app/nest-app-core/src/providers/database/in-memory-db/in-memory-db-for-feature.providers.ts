import { InMemoryDBConfig } from './in-memory-db-config';
import { getInMemoryDBServiceToken } from './in-memory-db.utils';
import { inMemoryDBServiceFactory } from './in-memory-db-service.factory';
import { FactoryProvider } from '@nestjs/common/interfaces';

export function createInMemoryDBForFeatureProviders(
  featureName: string,
  featureConfig: Partial<InMemoryDBConfig>,
): FactoryProvider[] {
  const providers: FactoryProvider[] = [
    {
      provide: getInMemoryDBServiceToken(featureName),
      useFactory: inMemoryDBServiceFactory(featureConfig, featureName),
    },
  ];
  return providers;
}
