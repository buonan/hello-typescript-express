import User from '../models/user.model';

class UsersService {
    private id: number = 1;
    private users: User[] = [
        {
            email: 'test@gmail',
            password: 'password'
        }
    ];

    constructor() {

    }

    getAllUsers = (): User[] => {
        return this.users;
    }
    createUser = (body: any): User => {
        const user: User = body;
        this.users.push(user);
        return user;
    }
    deleteUser = (index: number): User[] => {
        this.users.splice(index, 1)
        return this.users;
    }
    updateUser = (index: number, body: any): User => {
        this.users[index] = body;
        return this.users[index];
    }
}

export default UsersService;