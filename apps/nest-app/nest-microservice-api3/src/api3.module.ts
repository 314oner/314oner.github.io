import { Module } from '@nestjs/common';
import { Api3Controller } from './api3.controller';
import { Api3Service } from './api3.service';
@Module({
  imports: [],
  providers: [Api3Service],
  controllers: [Api3Controller],
})
export class Api3Module {}
