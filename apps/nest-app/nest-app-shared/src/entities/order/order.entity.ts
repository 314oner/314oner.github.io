import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  price: number;

  @Column({ default: 'NEW' })
  status: string;

  @Column({ default: () => 0 })
  paymentId: number;
}
