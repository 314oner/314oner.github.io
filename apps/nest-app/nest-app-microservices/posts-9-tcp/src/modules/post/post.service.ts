import { PostEntity } from '@app/posts/entities/post.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
const _ = require('lodash');
@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}
  async createPost(postDto: any): Promise<any> {
    //const { title, text, userId } = postDto;
    //const newPost = { title, text, userId };
    const post = new PostEntity();
    post.title = postDto.title;
    post.text = postDto.text;
    post.UserId = postDto.userId;
    post.dateAndTimePublish = new Date();
    await this.postRepository.save(post);
    return this.getPostById(post.id);
  }

  async deletePost(postId: number) {
    await this.postRepository.delete(postId);
  }

  async getPostById(postId: any): Promise<any> {
    const post = await this.postRepository.findOne({
      where: { id: postId },
      //relations: ['userLikes'],
    });
    if (post) {
      return post;
    } else {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }
  }

  async getLatestPosts() {
    return this.postRepository.find({
      relations: ['userLikes'],
      order: {
        dateAndTimePublish: 'DESC',
      },
    });
  }

  async getHotPosts() {
    const posts = await this.postRepository.find({
      relations: ['userLikes'],
    });
    return _.orderBy(posts, ['desc']);
  }

  async getTopPosts() {
    const posts = await this.postRepository.find({
      relations: ['userLikes'],
    });
    return _.orderBy(
      posts,
      (post: { userLikes: string | any[] }) => post.userLikes.length,
      ['desc'],
    );
  }

  async getPostsByUserId(params: any) {
    const { id } = params;
    const posts = await this.postRepository.find({
      relations: ['userLikes'],
      where: { UserId: id },
    });
    return posts;
  }
}
