import { Post } from '../post/post.entity';
import { Comment } from '../comment/comment.entity';
import { Like } from '../like/like.entity';
export declare enum UserRole {
    ADMIN = "admin",
    USER = "user",
    MANAGER = "manager"
}
export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: UserRole;
    profilePicture: string;
    posts: Post[];
    comments: Comment[];
    likedPosts: Like[];
    username?: string;
    name?: string;
    verified?: boolean;
    hashedPassword?: string;
    salt?: string;
    updated?: Date;
    created?: Date;
    seller?: boolean;
    surname?: string;
    phoneNumber?: string;
    refreshToken?: string;
    hashPassword(): Promise<void>;
}
