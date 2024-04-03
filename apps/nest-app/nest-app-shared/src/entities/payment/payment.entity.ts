import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column({ default: 'NEW' })
  status: string;

  @Column({ default: () => 0 })
  orderId: number;
}
