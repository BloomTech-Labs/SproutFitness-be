const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');

describe('Coaches certifications /api/coach_certifications', () => {

	beforeEach( async() => {
		await db('coach_certifications').truncate();
	}) 

	describe('GET /', () => {
		it('should return object with test data', () => {

			const cert = {
				"coach_id": "0dd171a1-37f7-4a71-9bc3-06c30fbb623b",
				"name": "test cert"
			}

			db('coach_certifications')
			.insert(cert, "id")
			.then(res => {

			})
	  
			return request(server)
			.get('/api/coach_certifications')
			.then(res => {
				expect(res.type).toBe('application/json');
				expect(res.status).toBe(200);
				expect(res.body[0].name).toBe("test cert");
			});
		});
	});

	describe('GET /:id', () => {
		it('should return object with test data', async () => {

			const cert = {
				"coach_id": "0dd171a1-37f7-4a71-9bc3-06c30fbb623b",
				"name": "test cert"
			}

			const [id] = await db('coach_certifications')
			.insert(cert, "id")
			.then(ids => {
				return ids
			})

			const addedCert = await db('coach_certifications')
			.where({ id })
			.first()			

			return request(server)
			.get(`/api/coach_certifications/${addedCert.id}`)
			.then(res => {
				expect(res.type).toBe('application/json')
				expect(res.status).toBe(200)
				expect(res.body.name).toBe("test cert")
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
				expect(res.type).toBe('application/json')
				expect(res.status).toBe(201)
				expect(res.body.name).toBe(newCert.name)
			});
		});
	});

	describe('PUT /:id', () => {
		it('should return true or 1 on success', async () => {
			const updatedCert = {
				"name": "updated certificate"
			}

			const cert = {
				"coach_id": "0dd171a1-37f7-4a71-9bc3-06c30fbb623b",
				"name": "test cert"
			}

			const [id] = await db('coach_certifications')
			.insert(cert, "id")
			.then(ids => {
				return ids
			})

			const addedCert = await db('coach_certifications')
			.where({ id })
			.first()			

			return request(server)
			.put(`/api/coach_certifications/${addedCert.id}`)
			.send(updatedCert)
			.then(res => {
				expect(res.type).toBe('application/json')
				expect(res.status).toBe(200)
				expect(res.body).toBe(1)
			});
		});
	});

	describe('DELETE /:id', () => {
		it('should return true or 1 on success', async () => {

			const cert = {
				"coach_id": "0dd171a1-37f7-4a71-9bc3-06c30fbb623b",
				"name": "test cert"
			}

			const [id] = await db('coach_certifications')
			.insert(cert, "id")
			.then(ids => {
				return ids
			})

			const addedCert = await db('coach_certifications')
			.where({ id })
			.first()	

			return request(server)
			.delete(`/api/coach_certifications/${addedCert.id}`)
			.then(res => {
				expect(res.type).toBe('application/json')
				expect(res.status).toBe(200)
				expect(res.body).toBe(1)
			})
		})
	})
});
