import { PostEntity } from '@app/posts/modules/post/enitities/post.entity';
import { UserEntity } from '@app/users/modules/user/entities';
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
