import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoesNotExist } from '@shared/common/utils/validators/does-not-exist.validator';
import { Pet } from './enitities/pet.entity';
import { PetController } from './pet.controller';
import { PetService } from './pet.service';
import { PetRepository } from './repositories/pet.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Pet])],
  controllers: [PetController],
  providers: [DoesNotExist, PetService, PetRepository],
  exports: [PetService],
})
export class PetModule {}
