import { CommentEntity } from '@app/comments/entities/comment.entity';
import { LikeEntity } from '@app/likes/entities/like.entity';
import { UserEntity } from '@app/users/entities/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PostInterface } from '../modules/post/interfaces';

@Index('UserId', ['UserId'], {})
@Entity()
export class PostEntity extends BaseEntity implements PostInterface {
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

  @OneToMany(() => CommentEntity, (comment) => comment.post, { eager: true })
  comments: CommentEntity[];
}
