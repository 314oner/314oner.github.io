import { CommentInterface } from '@app/comments/modules/comment/interfaces/comment.interface';
import { PostEntity } from '@app/posts/entities/post.entity';
import { UserEntity } from '@app/users/entities/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class CommentEntity extends BaseEntity implements CommentInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  dateAndTimePublish: Date;

  @ManyToOne(() => UserEntity, (user) => user.comments, { eager: true })
  user: number;

  @ManyToOne(() => PostEntity, (post) => post.comments, {
    onDelete: 'CASCADE',
  })
  post: number;
}
