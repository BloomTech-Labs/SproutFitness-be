const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');

describe('register', () => {
    describe('POST /', () => {
        it('returns 404', () => {
            return request(server)
            .post('/register')
            .then(res => {
                expect(res.status).toBe(404);
                expect(res.type).toBe('text/html')
            })
        })
    })
})