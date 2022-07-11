import express, { Request, Response } from "express";
import UserService from "../services/users.service";

class UserController {
  public path = '/user';
  public router = express.Router();
  private service: UserService;

  constructor() {
    this.service = new UserService();
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get(this.path, this.getAllUsers);
    this.router.post(this.path, this.createUser);
    this.router.put(`${this.path}/:id`, this.updateUser);
    this.router.delete(`${this.path}/:id`, this.deleteUser);
  }

  getAllUsers = (req: Request, resp: Response) => {
    const users = this.service.getAllUsers();
    resp.send(users);
  }
  createUser = (req: Request, resp: Response) => {
    const user = this.service.createUser(req.body);
    resp.send(user);
  }
  updateUser = (req: Request, resp: Response) => {
    const index = +req.params.id as unknown as number;
    this.service.updateUser(index, req.body);
    resp.send({ ok: true })
  }
  deleteUser = (req: Request,  resp: Response) => {
    const index = +req.params.id as unknown as number;
    this.service.deleteUser(index);
    resp.send({ ok: true })
  }
}
export default UserController;