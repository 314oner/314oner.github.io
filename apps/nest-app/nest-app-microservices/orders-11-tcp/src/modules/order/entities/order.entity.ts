import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  price: number;

  @Column({ default: 'NEW' })
  status: string;

  @CreateDateColumn() createTimestamp: Date;

  @UpdateDateColumn() updateTimestamp: Date;

  @Column({ default: () => 0 })
  paymentId: number;
}
