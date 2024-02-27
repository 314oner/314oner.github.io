import { Inject, Injectable } from '@nestjs/common';
import { KafkaModuleOption } from './interfaces/KafkaModuleOptions';
import { KAFKA_MODULE_OPTIONS } from './constants';

@Injectable()
export class KafkaModuleOptionsProvider {
  [x: string]: any;
  constructor(
  ) {}
  getOptionsByName(name: string) {
    //@ts-ignore
    return this.kafkaModuleOptions.find((x) => x.name === name).options;
  }
}
