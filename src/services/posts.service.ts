import Post from '../models/post.model';

class PostsService {
  private posts: Post[] = [
    {
      author: 'Marcin',
      content: 'Dolor sit amet',
      title: 'Lorem Ipsum',
    }
  ];

  constructor() {

  }

  getAllPosts = ():Post[] => {
    return this.posts;
  }

  createAPost = (body: any):Post => {
    const post: Post = body;
    this.posts.push(post);
    return post;
  }
}

export default PostsService;