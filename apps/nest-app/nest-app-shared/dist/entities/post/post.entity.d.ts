import { Tag } from "../tag/tag.entity";
import { Like } from "../like/like.entity";
import { Comment } from '../comment/comment.entity';
export declare class Post {
    id: number;
    title: string;
    text: string;
    dateAndTimePublish: Date;
    userLikes: Like[];
    postImage: string;
    user: number;
    comments: Comment[];
    tags: Tag[];
}
