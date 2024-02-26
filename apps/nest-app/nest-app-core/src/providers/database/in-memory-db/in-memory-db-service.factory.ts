import { InMemoryDBEntity } from './in-memory-db.entity';
import { InMemoryDBService } from './in-memory-db.service';
import { InMemoryDBConfig } from './in-memory-db-config';

export function inMemoryDBServiceFactory<T extends InMemoryDBEntity>(
  featureConfig: Partial<InMemoryDBConfig> = {},
  featureName?: string,
): () => InMemoryDBService<T> {
  return () =>
    new InMemoryDBService<T>({
      featureName: featureName
        ? featureName
        : featureConfig.featureName || 'root',
      ...featureConfig,
    });
}
