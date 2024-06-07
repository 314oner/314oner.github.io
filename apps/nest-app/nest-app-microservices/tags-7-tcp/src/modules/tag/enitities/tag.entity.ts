import { EntityHelper } from '@shared/common/utils/database/entity-helper';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TagInterface } from '../interfaces';

@Entity('tag')
export class TagEntity extends EntityHelper implements TagInterface {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  color: string;
}
