import { Inject, Injectable } from '@nestjs/common';
import HashTable from './hashtable';
import { HASHTABLE } from './hashtable.constants';
import { LinkedListStorageService } from '../linked-list/linked-list-storage.service';
const hashTableSize = 32;
@Injectable()
export class HashTableService {
  keys: {};
  buckets: LinkedListStorageService[];
  constructor(
    @Inject(HASHTABLE)
    private readonly cashify: HashTable /* hashTableSize = defaultHashTableSize, */,
  ) {}
  hash(key): any {
    return this.has(key);
  }
  set(key, value) {
    this.cashify.set(key, value);
  }
  delete(key) {
    this.cashify.delete(key);
  }
  get(key) {
    this.cashify.get(key);
  }
  has(key) {
    this.cashify.has(key);
  }
  getKeys() {
    this.cashify.getKeys();
  }
  getValues() {
    this.cashify.getValues();
  }
}
