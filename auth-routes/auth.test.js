const request = require('supertest');
const server = require('../api/server');
const knex = require('../database/dbConfig');

xdescribe('auth route login testing', () => {

	beforeEach(() => {
		return knex.migrate.rollback()
			.then(() => knex.migrate.latest())
			.then(() => knex.seed.run());
	});

	it('POST to /, should fail without correct password', () => {
		const wrongPass = {
			"email": "test@test.com",
			"password": "wrong password"
		}

		return request(server)
		.post('/api/login/coaches')
		.send(wrongPass)
		.then(res => {
			expect(res.type).toBe('application/json')
			expect(res.status).toBe(401)
			expect(res.body.message).toBe("Invalid credentials")
		});
	});
});