import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Record {
  @PrimaryGeneratedColumn()
  _id?: number;

  @Column()
  name!: string;
}
