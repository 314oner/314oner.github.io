import { Injectable, Optional } from '@nestjs/common';

import { InMemoryDBConfig } from './in-memory-db-config';
import { InMemoryDBEntity } from './in-memory-db.entity';
import { Observable, of } from 'rxjs';

import { v4 as uuid } from 'uuid';

@Injectable()
export class InMemoryDBService<T extends InMemoryDBEntity> {
  private recordMap: { [id: string]: T } = {};

  constructor(@Optional() private readonly config: InMemoryDBConfig) {}
  /**
   * - input array
   * ```json5
   * [
   *  {
   *    "id": "random-uuid",
   *    "prop": "test1"
   *  },
   *  {
   *    "id": "another-random-uuid",
   *    "prop": "test2"
   *  }
   * ]
   * ```
   * - becomes
   * ```json5
   * {
   *    "random-uuid": { "id": "random-uuid", "prop": "test1" },
   *    "another-random-uuid": { "id": "another-random-uuid", "prop": "test2" }
   * }
   * ```
   */
  set records(records: T[]) {
    if (!records || records.length === 0) {
      this.recordMap = {};
    }
    this.recordMap = records.reduce(
      (previous: { [id: string]: T }, current: T) => {
        return {
          ...previous,
          [current.id]: current,
        };
      },
      this.recordMap,
    );
  }
  get records(): T[] {
    return Object.keys(this.recordMap).map(key => this.recordMap[key]);
  }

  /**
   * Добавить запись в in-memory
   */
  public create(record: Partial<T>, getNextId: () => string = () => uuid()): T {
    const id = record.id || getNextId();
    const newRecord: T = { ...record, id } as T;
    this.recordMap = {
      ...this.recordMap,
      [newRecord.id]: newRecord,
    };
    return newRecord;
  }

  /**
   * Добавить запись в in-memory async
   */
  public createAsync(record: Partial<T>): Observable<T> {
    const result$ = of(this.create(record));
    return result$;
  }

  /**
   * Добавить записи в in-memory
   */
  public createMany(
    records: Array<Partial<T>>,
    getNextId: () => string = () => uuid(),
  ): T[] {
    return records.map(record => this.create(record, getNextId));
  }

  /**
   * Добавить записи в in-memory async
   */
  public createManyAsync(
    records: Array<Partial<T>>,
    getNextId: () => string = () => uuid(),
  ): Observable<T[]> {
    const result$ = of(this.createMany(records, getNextId));
    return result$;
  }

  /**
   * Обновить запись в in-memory
   */
  public update(record: T): void {
    this.recordMap = {
      ...this.recordMap,
      [record.id]: { ...record },
    };
  }

  /**
   * Обновить запись в in-memory async
   */
  public updateAsync(record: T): Observable<void> {
    this.update(record);
    const result$ = of<void>();
    return result$;
  }

  /**
   * Обновить записи в in-memory
   */
  public updateMany(records: T[]): void {
    for (const record of records) {
      this.update(record);
    }
  }

  /**
   * Обновить записи в in-memory async
   */
  public updateManyAsync(records: T[]): Observable<void> {
    this.updateMany(records);
    const result$ = of<void>();
    return result$;
  }

  /**
   * Удалить запись по id
   */
  public delete(id: string): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [id]: removed, ...remainder } = this.recordMap;
    this.recordMap = {
      ...remainder,
    };
  }

  /**
   * Удалить запись по id async
   */
  public deleteAsync(id: string): Observable<void> {
    this.delete(id);
    const result$ = of<void>();
    return result$;
  }

  /**
   * Удалить записи по айдишникам
   */
  public deleteMany(ids: string[]): void {
    for (const id of ids) {
      this.delete(id);
    }
  }

  /**
   * Удалить записи по айдишникам async
   */
  public deleteManyAsync(ids: string[]): Observable<void> {
    this.deleteMany(ids);
    const result$ = of<void>();
    return result$;
  }

  /**
   * Получить запись по id
   */
  public get(id: string): T {
    return this.recordMap[id];
  }

  /**
   * Получить запись по id async
   */
  public getAsync(id: string): Observable<T> {
    const result$ = of(this.get(id));
    return result$;
  }

  /**
   * Получить записи по ids
   */
  public getMany(ids: string[]): T[] {
    const records = ids
      .filter(id => this.recordMap[id])
      .map(id => {
        return this.recordMap[id];
      });

    return records;
  }

  /**
   * Получить записи по ids async
   */
  public getManyAsync(ids: string[]): Observable<T[]> {
    const result$ = of(this.getMany(ids));
    return result$;
  }

  /**
   * Вернуть все записи
   */
  public getAll(): T[] {
    return this.records || [];
  }

  /**
   * Вернуть все записи async
   */
  public getAllAsync(): Observable<T[]> {
    const result$ = of(this.getAll());
    return result$;
  }

  /**
   * Example:
   * - given records:
   * ```json5
   * [
   *  {
   *    "id": "random-uuid",
   *    "prop": "test1"
   *  },
   *  {
   *    "id": "another-random-uuid",
   *    "prop": "test2"
   *  }
   * ]
   * ```
   * - to find records with a `prop` value of `test1`:
   * ```ts
   * const records: T[] = service.query(record => record.prop === 'test1');
   * ```
   * @param predicate the filter predicate
   */
  public query(predicate: (record: T) => boolean): T[] {
    return this.records.filter(predicate);
  }

  /**
   * Example:
   * - given records:
   * ```json5
   * [
   *  {
   *    "id": "random-uuid",
   *    "prop": "test1"
   *  },
   *  {
   *    "id": "another-random-uuid",
   *    "prop": "test2"
   *  }
   * ]
   * ```
   * - to find records with a `prop` value of `test1`:
   * ```ts
   * const records: Observable<T[]> = service.queryAsync(record => record.prop === 'test1');
   * ```
   * @param predicate the filter predicate
   */
  public queryAsync(predicate: (record: T) => boolean): Observable<T[]> {
    const result$ = of(this.query(predicate));
    return result$;
  }

  /**
   * Randomly generate at a set of records for the given amount and record factory.
   * Example:
   * ```typescript
   * service.seed((i) => { myProp: i}, 100);
   * ```
   *
   * @param recordFactory a factory method to call when generating the random record.
   * @param amount the amount of records to generate, defaults to 10.
   */
  public seed(
    recordFactory: (index: number) => Partial<T>,
    amount = 10,
    getNextId: () => string = () => uuid(),
  ): void {
    amount = amount === null ? 10 : amount;

    const recordsToCreate = [...Array(amount).keys()].map(i =>
      recordFactory(i),
    );

    this.createMany(recordsToCreate, getNextId);
  }
}
