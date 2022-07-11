import App from './server';
import UserController from './controllers/users.controller';
import PostController from './controllers/posts.controller';

const PORT = process.env.PORT || 5000;

const app = new App(
  [
    new UserController(),
    new PostController(),
  ],
  +PORT,
);
app.listen();


