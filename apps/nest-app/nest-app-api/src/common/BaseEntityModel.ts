import {
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  Column,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class BaseEntityModel {
  @Column()
  @ApiProperty({ description: 'Время создания' })
  public createTime: Date;

  @Exclude()
  @Column()
  @ApiProperty({ description: 'Время обновления' })
  public updateTime: Date;
}

@Entity()
export class BaseEntityModelWithUUIDPrimary extends BaseEntityModel {
  @ApiProperty({ description: 'id' })
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
