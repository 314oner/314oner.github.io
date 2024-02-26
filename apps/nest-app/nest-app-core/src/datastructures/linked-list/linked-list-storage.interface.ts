import LinkedListNode from './linked-list-node';

export interface LinkedListStorage {
  storage: Record<string, number[]>;
  getRecord(key: string): Promise<number[]>;
  addRecord(key: string, ttl: number): Promise<void>;
  prepend(value): any;
  append(value): any;
  insert(value, rawIndex): any;
  delete(value): any;
  find({ value, callback }): any;
  deleteTail(): any;
  deleteHead(): any;
  fromArray(values): any;
  toString(callback): any;
  reverse(): any;
}

export const LinkedListStorage = Symbol('LinkedListStorage');
