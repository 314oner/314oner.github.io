import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CarManufacturer {
  @PrimaryGeneratedColumn()
  _id?: string;

  @Column()
  name!: string;
}
