import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail } from 'class-validator';
import { Post } from '../post/post.entity';
import { Comment } from '../comment/comment.entity';
import { Like } from '../like/like.entity';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  MANAGER = 'manager',
}

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  firstName: string;

  @Column({ nullable: false })
  lastName: string;

  @IsEmail()
  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({
    type: 'simple-enum',
    default: 'user',
    enum: UserRole,
  })
  role: UserRole;

  @Column({
    default: 'https://via.placeholder.com/600/24f355',
  })
  profilePicture: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

  @OneToMany(() => Like, (like) => like.user)
  likedPosts: Like[];

  @Column({ nullable: true })
  username?: string;

  @Column({ nullable: true })
  name?: string;

  @Column({ nullable: true })
  verified?: boolean;

  @Column({ nullable: true })
  hashedPassword?: string;

  @Column({ nullable: true })
  salt?: string;

  @Column({ nullable: true })
  updated?: Date;

  @Column({ default: Date.now })
  created?: Date;

  @Column({ nullable: true })
  seller?: boolean;

  @Column({ nullable: true })
  surname?: string;

  @Column({ nullable: true })
  phoneNumber?: string;

  @Column({ nullable: true })
  refreshToken?: string;
}
