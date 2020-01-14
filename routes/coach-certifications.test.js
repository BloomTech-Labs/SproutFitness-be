const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');
const knex = require('../database/dbConfig');

describe('Coaches certifications /api/coach_certifications', () => {

	beforeEach(() => {
		return knex.migrate.rollback()
			.then(() => knex.migrate.latest())
			.then(() => knex.seed.run());
	});

	describe('GET /', () => {
		it('should return object with seed data', () => {
			return request(server)
			.get('/api/coach_certifications')
			.then(res => {
				expect(typeof res).toBe('object');
				expect(res.status).toBe(200);
				expect(res.body[3].name).toBe("American Fitness Professionals & Associates");				
			});
		});
	});

	describe('GET /:id', () => {
		it('should return object with seed data', () => {
			return request(server)
			.get('/api/coach_certifications/b75e4aed-b928-430b-a71e-0c46138b9760')
			.then(res => {
				expect(typeof res).toBe('object')
				expect(res.status).toBe(200)
				expect(res.body.name).toBe("NSHC – National Society of Health Coaches")
			});
		});
	});

	describe('POST /', () => {
		it('should return the added coach cerification', () => {
			const newCert = {
				"coach_id": "adf4b829-9d72-406f-8db2-de69e9655c60",
				"name": "test cert"
			}

			return request(server)
			.post('/api/coach_certifications')
			.send(newCert)
			.then(res => {
				expect(typeof res).toBe('object')
				expect(res.status).toBe(201)
				expect(res.body.name).toBe(newCert.name)
			});
		});
	});

	describe('PUT /:id', () => {
		it('should return true or 1 on success', () => {
			const updatedCert = {
				"name": "updated certificate"
			}

			return request(server)
			.put('/api/coach_certifications/f2ee60db-f87f-4869-b362-503e67f5831b')
			.send(updatedCert)
			.then(res => {
				expect(typeof res).toBe('object')
				expect(res.status).toBe(200)
				expect(res.body).toBe(1)
			});
		});
	});

	describe('DELETE /:id', () => {
		it('should return true or 1 on success', () => {
			return request(server)
			.delete('/api/coach_certifications/a8ff37bb-d034-4d75-ab81-585d77efc481')
			.then(res => {
				expect(typeof res).toBe('object')
				expect(res.status).toBe(200)
				expect(res.body).toBe(1)
			})
		})
	})
});
