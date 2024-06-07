import { LikeEntity } from '@app/likes/modules/like/enitities/like.entity';
import { PostEntity } from '@app/posts/modules/post/enitities/post.entity';
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
import { UserInterface } from '../interfaces/user.interface';

@Entity()
@Unique(['username'])
@Unique(['email'])
export class UserEntity extends BaseEntity implements UserInterface {
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Column()
  public username!: string;

  @Column({ type: 'varchar', length: 255, select: true, unique: true })
  public email!: string;

  @Column({ type: 'varchar' })
  public password!: string;

  @Column({ type: 'boolean' })
  public is_confirmed!: boolean;

  @OneToMany(() => PostEntity, (post) => post.user)
  posts: PostEntity[];

  @OneToMany(() => LikeEntity, (like) => like.user)
  likedPosts: LikeEntity[];

  @CreateDateColumn({})
  public createdAt!: Date;

  @UpdateDateColumn({})
  public updatedAt!: Date;
}
