const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');


xdescribe('Coaches certifications /api/coach_specialty_details', () => {

	beforeEach( async() => {
		await db('coach_specialty_details').truncate();
	})  

	describe('GET /', () => {
		it('should return object with seed data', async () => {

			return request(server)
			.get('/api/coach_specialty_details')
			.then(res => {
				expect(res.type).toBe('application/json');
				expect(res.status).toBe(200);
				expect(res.body.length).toBe(3);
			});
		});
	});

	describe('GET /:id', () => {
		it('should return object with seed data', () => {
			return request(server)
			.get('/api/coach_specialty_details/62ae9ed9-1a55-4aad-886b-780077d6c2cc')
			.then(res => {
				expect(res.type).toBe('application/json');
				expect(res.status).toBe(200);
				expect(res.body.coach_id).toBe("adf4b829-9d72-406f-8db2-de69e9655c60");
			});
		});
	});

	describe('POST /', () => {
		it('should return the new entry', () => {
			const newSpecDetails = {
				coach_id: 'adf4b829-9d72-406f-8db2-de69e9655c60',
				specialty_id: '08ea05a4-2ea0-4e15-80a0-236b86e2fb99',
			}

			return request(server)
			.post('/api/coach_specialty_details')
			.send(newSpecDetails)
			.then(res => {
				expect(res.type).toBe('application/json')
				expect(res.status).toBe(201)
				expect(res.body.coach_id).toBe("adf4b829-9d72-406f-8db2-de69e9655c60")
				expect(res.body.specialty_id).toBe("08ea05a4-2ea0-4e15-80a0-236b86e2fb99")
			});
		});
	});

	describe('PUT /:id', () => {
		it('should return 1 for true on success', () => {
			const updatedSpecDetails = {
				specialty_id: '08ea05a4-2ea0-4e15-80a0-236b86e2fb99'
			}

			return request(server)
			.put('/api/coach_specialty_details/62ae9ed9-1a55-4aad-886b-780077d6c2cc')
			.send(updatedSpecDetails)
			.then(res => {
				expect(res.type).toBe('application/json')
				expect(res.status).toBe(200)
				expect(res.body).toBe(1)
			});
		});
	});

	describe('DELETE /:id', () => {
		it('should return 1 for true on success', () => {
			return request(server)
			.delete("/api/coach_specialty_details/62ae9ed9-1a55-4aad-886b-780077d6c2cc")
			.then(res => {
				expect(res.type).toBe('application/json')
				expect(res.status).toBe(200)
				expect(res.body).toBe(1)
			})
		})
	})
});
