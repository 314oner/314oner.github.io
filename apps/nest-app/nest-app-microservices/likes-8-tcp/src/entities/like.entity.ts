import { PostEntity } from '@app/posts/entities/post.entity';
import { UserEntity } from '@app/users/entities/user.entity';
import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LikeEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user) => user.likedPosts, { eager: true })
  user: number;

  @ManyToOne(() => PostEntity, (post) => post.userLikes, {
    onDelete: 'CASCADE',
  })
  post: number;
}
