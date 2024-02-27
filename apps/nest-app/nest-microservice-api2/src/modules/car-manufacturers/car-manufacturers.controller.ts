import { Controller, Get, Param, Query } from '@nestjs/common';
import { CarManufacturer } from '../../models/car-manufacturer.entity';
import { CarManufacturersService } from './car-manufacturers.service';

@Controller('cars')
export class CarManufacturersController {
  constructor(private carManufacturersService: CarManufacturersService) {}

  @Get(':country')
  async findAll(@Param('country') country: string): Promise<CarManufacturer[]> {
    return this.carManufacturersService.findAll(country);
  }
}
