import { Module } from '@nestjs/common';
import { DoesNotExist } from '@shared/common/utils/validators/does-not-exist.validator';
import { PetController } from './pet.controller';
import { PetService } from './pet.service';

@Module({
  imports: [],
  controllers: [PetController],
  providers: [DoesNotExist, PetService],
  exports: [PetService],
})
export class PetModule {}
