import App from './server';
import UserController from './controllers/users.controller';
import PostController from './controllers/posts.controller';

export const PORT = process.env.PORT || 3000;

const app = new App(
  [
    new UserController(),
    new PostController(),
  ],
  +PORT,
);

export const close = () => {
  app.close();
}

app.listen();
