const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');

describe('Coaches router', () => {
  describe('GET /', () => {
    it('should return an object', () => {
      return request(server)
        .get('/coaches')
        .then(res => {
          expect(typeof res).toBe('object');
        });
    });

    it('returns 200 ok', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
});
