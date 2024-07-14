import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TagInterface } from '../modules/tag/interfaces';

@Entity()
export class TagEntity extends BaseEntity implements TagInterface {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  color: string;
}
