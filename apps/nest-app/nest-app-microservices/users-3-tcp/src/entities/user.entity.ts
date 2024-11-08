import { CommentEntity } from '@app/comments/entities/comment.entity';
import { LikeEntity } from '@app/likes/entities/like.entity';
import { PostEntity } from '@app/posts/entities/post.entity';
import { Exclude } from 'class-transformer';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@Unique(['username'])
@Unique(['email'])
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Column()
  public username!: string;

  @Column({ type: 'varchar', length: 255, select: true, unique: true })
  public email!: string;

  @Exclude()
  @Column({ type: 'varchar' })
  public password!: string;

  @Column({ type: 'boolean' })
  public is_confirmed!: boolean;

  @Column({ type: 'boolean', default: false })
  public isAdmin!: boolean;

  @Column({
    type: 'varchar',
    nullable: true,
    default: 'https://www.gstatic.com/webp/gallery3/2_webp_a.webp',
  })
  public profile_picture!: string;

  @OneToMany(() => PostEntity, (post) => post.user)
  public posts!: PostEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.user)
  public comments!: CommentEntity[];

  @OneToMany(() => LikeEntity, (like) => like.user)
  public likedPosts!: LikeEntity[];

  @CreateDateColumn({})
  public createdAt!: Date;

  @UpdateDateColumn({})
  public updatedAt!: Date;
}
