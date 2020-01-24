const server = require('./server');
const request = require('supertest');

describe('GET /', () => {
    it('returns 200 OK', () => {
        return request(server).get('/')
        .expect(200)
    })
})