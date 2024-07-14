import { Module } from '@nestjs/common';
import { DatabaseModule } from '@shared/common/modules/database/database.module';

@Module({
  imports: [
    DatabaseModule.forRoot({
      entities: [`${__dirname}/../../entities/*.entity{.ts,.js}`],
    }),
  ],
})
export class WrappedDatabaseModule {}
