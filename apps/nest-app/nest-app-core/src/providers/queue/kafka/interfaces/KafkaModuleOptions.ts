import { Deserializer, Serializer } from '@nestjs/microservices';
import {
  ConsumerConfig,
  KafkaConfig,
  ProducerConfig,
  ProducerRecord,
  Message,
  ConsumerRunConfig,
  Transaction,
  RecordMetadata,
} from 'kafkajs';
import { ModuleMetadata, Type } from '@nestjs/common';

export interface KafkaModuleOption {
  name: string;
  options: {
    client: KafkaConfig;
    consumer: ConsumerConfig;
    consumerRunConfig?: ConsumerRunConfig;
    producer?: ProducerConfig;
    deserializer?: Deserializer;
    serializer?: Serializer;
    consumeFromBeginning?: boolean;
    seek?: Record<string, number | 'earliest' | Date>;
    autoConnect?: boolean;
  };
}
export interface KafkaModuleOptionsAsync
  extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  useExisting?: Type<KafkaOptionsFactory>;
  useClass?: Type<KafkaOptionsFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<KafkaModuleOption[]> | KafkaModuleOption[];
}

export interface KafkaOptionsFactory {
    creatKafkaModuleOptions(): Promise<KafkaModuleOption[]> | KafkaModuleOption[];
  }