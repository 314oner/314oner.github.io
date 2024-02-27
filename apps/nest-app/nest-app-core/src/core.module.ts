import { Module } from '@nestjs/common';
import { CoreService } from './core.service';
import { InMemoryDBModule } from './providers/database/in-memory-db/in-memory-db.module';
import { HashTableModule } from './datastructures/hashtable/hashtable.module';
import { ThrottlerModule } from './common/helpers/throttler';

@Module({
  imports: [InMemoryDBModule, HashTableModule, ThrottlerModule],
  providers: [CoreService],
  exports: [CoreService, InMemoryDBModule, HashTableModule, ThrottlerModule],
})
export class CoreModule {}
