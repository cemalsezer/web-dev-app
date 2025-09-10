import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  private posts = [
    { id: 1, userId: 1, title: 'Hello World', body: 'This is the first post' },
    { id: 2, userId: 2, title: 'Second Post', body: 'Another post here' },
  ];

  create(createPostDto: CreatePostDto) {
    const newPost = { id: Date.now(), ...createPostDto };
    this.posts.push(newPost);
    return newPost;
  }

  findAll() {
    return this.posts;
  }

  findOne(id: number) {
    return this.posts.find((post) => post.id === id);
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    const index = this.posts.findIndex((post) => post.id === id);
    if (index === -1) return null;
    this.posts[index] = { ...this.posts[index], ...updatePostDto };
    return this.posts[index];
  }

  remove(id: number) {
    const index = this.posts.findIndex((post) => post.id === id);
    if (index === -1) return null;
    return this.posts.splice(index, 1);
  }
}
