import * as express from 'express';
import PostsService from "../services/posts.service";

class PostsController {
  public path = '/posts';
  public router = express.Router();
  private service: PostsService;
 
  constructor() {
    this.service = new PostsService();
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
    this.router.post(this.path, this.createAPost);
  }
 
  getAllPosts = (req: express.Request, resp: express.Response) => {
    const posts = this.service.getAllPosts();
    resp.send(posts);
  }
 
  createAPost = (req: express.Request, resp: express.Response) => {
    const post = this.service.createAPost(req.body);
    resp.send(post);
  }
}
 
export default PostsController;