import { WrappedConfigModule } from '@app/pets/modules/config/config.module';
import { WrappedDatabaseModule } from '@app/pets/modules/database/database.module';
import {
  ClassSerializerInterceptor,
  Module,
  ValidationPipe,
} from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { HomeModule } from '@shared/common/modules/home/home.module';
import { LoggerModule } from '@shared/common/modules/logger/logger.module';
import { HttpExceptionFilter } from '@shared/common/utils/filters/http-exception.filter';
import { validationOptions } from '@shared/common/utils/validation-options';
import { PetModule } from './modules/pet/pet.module';

@Module({
  imports: [
    WrappedConfigModule,
    WrappedDatabaseModule,
    HomeModule,
    LoggerModule,
    PetModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe(validationOptions),
    },
    {
      provide: APP_FILTER,
      useValue: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
  controllers: [],
})
export class AppModule {}
