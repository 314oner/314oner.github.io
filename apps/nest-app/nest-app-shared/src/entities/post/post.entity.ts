import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { User } from "../user/user.entity";
import { Tag } from "../tag/tag.entity";
import { Like } from "../like/like.entity";
import { Comment } from '../comment/comment.entity'

@Entity({ name: 'posts' })
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    text: string;

    @Column()
    dateAndTimePublish: Date

    @OneToMany(() => Like, (like) => like.post, { eager: true })
    userLikes: Like[]

    @Column({ nullable: true })
    postImage: string;

    @ManyToOne(() => User, (user) => user.posts, { eager: true, onDelete: 'CASCADE' })
    user: number

    @OneToMany(() => Comment, (comment) => comment.post, { eager: true })
    comments: Comment[]

    @ManyToMany(() => Tag, { eager: true })
    @JoinTable()
    tags: Tag[]
}