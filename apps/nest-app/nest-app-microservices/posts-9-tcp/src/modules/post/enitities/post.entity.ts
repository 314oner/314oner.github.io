import { LikeEntity } from '@app/likes/modules/like/enitities/like.entity';
import { UserEntity } from '@app/users/modules/user/entities';
import { EntityHelper } from '@shared/common/utils/database/entity-helper';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PostInterface } from '../interfaces';

@Index('UserId', ['UserId'], {})
@Entity('post')
export class PostEntity extends EntityHelper implements PostInterface {
  userId: string;
  @PrimaryGeneratedColumn() id: number;
  @Column()
  title: string;

  @Column()
  text: string;

  @Column({ nullable: true })
  dateAndTimePublish: Date;

  @Column('char', { name: 'UserId', nullable: false })
  UserId: string;

  @ManyToOne(() => UserEntity, (user) => user.posts, {
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'UserId', referencedColumnName: 'id' })
  user: string;

  @OneToMany(() => LikeEntity, (like) => like.post, { eager: true })
  userLikes: LikeEntity[];

  tags: any;
}
