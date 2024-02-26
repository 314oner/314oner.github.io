import { FactoryProvider } from '@nestjs/common/interfaces';

import { inMemoryDBServiceFactory } from './in-memory-db-service.factory';
import { getInMemoryDBServiceToken } from './in-memory-db.utils';
import { InMemoryDBConfig } from './in-memory-db-config';

export function createInMemoryDBForRootProviders(
  featureConfig: Partial<InMemoryDBConfig>,
): FactoryProvider[] {
  const providers: FactoryProvider[] = [
    {
      provide: getInMemoryDBServiceToken(),
      useFactory: inMemoryDBServiceFactory(featureConfig),
    },
  ];
  return providers;
}
