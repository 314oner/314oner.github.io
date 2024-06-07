import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('token')
export class TokenEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Column({ type: 'varchar', length: 255, select: true, unique: false })
  public user_id!: string;

  @Column({ type: 'varchar' })
  public token!: string;

  @CreateDateColumn({})
  public created_at!: Date;

  @UpdateDateColumn({})
  public updated_at!: Date;
}
