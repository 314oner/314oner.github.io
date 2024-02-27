import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';

import { KafkaModuleOption } from './interfaces/KafkaModuleOptions';
import { KafkaTransaction } from './interfaces/KafkaRequest';
import { KafkaLogger } from '@nestjs/microservices/helpers/kafka-logger';
import { KafkaResponseDeserializer } from './deserializer/kafka-response.deserializer';
import { KafkaRequestSerializer } from './serializer/kafka-request.serializer';
import { Consumer, ConsumerRunConfig, Kafka, Producer } from 'kafkajs';
import { SUBSCRIBER_MAP, SUBSCRIBER_OBJECT_MAP } from './kafka.decorator';
import { Deserializer, Serializer } from '@nestjs/microservices';
import { HASHTABLE } from '../../../datastructures/hashtable/hashtable.constants';
import { HashTableService } from '../../../datastructures/hashtable/hashtable.service';

@Injectable()
export class KafkaService implements OnModuleInit, OnModuleDestroy {
  kafka: any;

  private producer: Producer;
  private consumer: Consumer;
  logger: any;
  constructor(options: any) {
    //@Inject(HASHTABLE) private hashTable: HashTableService,
    const {
      client,
      consumer: consumerConfig,
      producer: producerConfig,
    } = options;
    this.kafka = new Kafka({
      ...client,
      logCreator: KafkaLogger.bind(null, this.logger),
    });
    const { groupId } = consumerConfig;
    const consumerOptions = Object.assign(
      {
        groupId: this.getGroupIdSuffix(groupId),
      },
      consumerConfig,
    );

    this.consumer = this.kafka.consumer(consumerOptions);
    this.producer = this.kafka.producer(producerConfig);
  }
  public getGroupIdSuffix(groupId: string): string {
    return groupId + '-client';
  }
  onModuleInit() {
    throw new Error('Method not implemented.');
  }
  onModuleDestroy() {
    throw new Error('Method not implemented.');
  }
}
