import { Injectable } from '@nestjs/common';
import { PetRepository } from './repositories/pet.repository';
@Injectable()
export class PetService {
  constructor(private readonly petRepository: PetRepository) {}
}
