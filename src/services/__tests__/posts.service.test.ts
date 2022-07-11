import PostsService from "../posts.service";

describe('users service tests', () => {

    test('getAllPosts test', () => {
        const service = new PostsService();
        const posts = service.getAllPosts();
        expect(posts.length).toBeGreaterThan(0);
    })

})