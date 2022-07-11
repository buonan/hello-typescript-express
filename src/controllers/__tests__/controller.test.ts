import fetch from 'node-fetch';

describe('controller tests', () => {
    var server: any;
    beforeAll(async () => {
        server = require('../../index');
    });
    afterAll(async () => {
        
    });
    test('server health test', async () => {
        const response = await fetch(`http://localhost:${server.PORT}/health`, { method: 'GET' });
        const data: any = await response.json();
        expect(data.ok).toBe(true);
    })
    test('server get all posts', async () => {
        const response = await fetch(`http://localhost:${server.PORT}/posts`, { method: 'GET' });
        const data: any = await response.json();
        expect(data.length).toBeGreaterThan(0);
    })
    test('server create new pos', async () => {        
        const response = await fetch(`http://localhost:${server.PORT}/posts`, { headers: {
            'content-type': 'application/json'
        },
        method: 'POST', body: '{"author":"bob@gmail.com", "content":"some content", "title": "some title"}' });
        const data: any = await response.json();
        expect(data.content).toBe('some content');
    })

})


