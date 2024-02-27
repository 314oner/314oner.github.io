import { ProducerRecord, Message, Transaction, RecordMetadata } from 'kafkajs';

export interface KafkaMessageObject extends Message {
  value: any | Buffer | string | null;
  key: any;
}
export interface KafkaMessageSend extends Omit<ProducerRecord, 'topic'> {
  messages: KafkaMessageObject[];
  topic?: string;
}
export interface KafkaTransaction
  extends Omit<Transaction, 'send' | 'sendBatch'> {
  send(message: KafkaMessageSend): Promise<RecordMetadata[]>;
}
