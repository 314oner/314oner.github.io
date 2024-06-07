import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  price: number;

  @Column({ default: 'NEW' })
  status: string;

  @Column({ default: () => 0 })
  orderId: number;
}
