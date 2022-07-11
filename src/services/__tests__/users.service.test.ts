import UserService from "../users.service";

describe('users service tests', () => {

    test('getAllPosts test', () => {
        const service = new UserService();
        const users = service.getAllUsers();
        expect(users.length).toBeGreaterThan(0);
    })

})