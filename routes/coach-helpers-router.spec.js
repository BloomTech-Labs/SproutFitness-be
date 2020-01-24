const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');

describe('coach helpers router', () => {
    describe('GET /', () => {
        it('should return an object', () => {
            return request(server)
            .get('/coach/data/:id')
            .then(res => {
                expect(typeof res).toBe('object');
            });
        });
        it('returns 404', () => {
            return request(server)
            .get('/coach/data/:id')
            .then(res => {
                expect(res.status).toBe(404);
                expect(res.type).toBe('text/html');
            });
        });
    describe('GET /coaches/list', () => {
        it('should return 404', () => {
            return request(server)
            .get('/coaches/list')
            .then(res => {
                expect(res.status).toBe(404)
            })
        })
    })

    describe('GET /specs', () => {
        it('works correctly', () => {
            return request(server).get('/coach/specs/:id')
            .expect(404)
            .expect('Content-Type', /html/)
        })
    })

    describe('', () => {
        it('works correctly', () => {
            return request(server).get('/coaches/list')
            .expect(404)
            .expect('Content-Type', /html/)
        })
    })

        it('works correctly', () => {
            return request(server).get('/spec/coaches/:id')
            .expect(404)
            .expect('Content-Type', /html/)
        })
        

    });
});