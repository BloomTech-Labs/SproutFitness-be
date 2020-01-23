const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');


   describe('Coaches specialties /api/specialties', () => {
 describe('GET /', () => {
     it('should return status code 200', () => {
         return request(server)
         .get('/api/specialties')
         .then(res => {
             expect(res.status).toBe(200);
         });
        }); 
        it('response should be an object', () => {
         return request(server)
         .get('/api/specialties')
         .then(res => {
             expect(typeof res).toBe('object');
         });
     });

    });

})

describe('GET /:id', () => {
    it('should return status code 200', () => {
        return request(server)
        .get('/api/specialties/2e91c857-acc4-4126-a2f2-8f64fb43a82e')
        .then(res => {
            expect(res.status).toBe(200);
        });
    }); 
    it('if id is not uuid return status 404', async () => {
        return request(server)
        .get('/api/specialties/gt123')
        .then(res => {
            expect(res.status).toBe(404);
        });
    }); 
    it('if id has too many characters return status 404', async () => {
       return request(server)
        .get('/api/specialties/2e91c857-acc4-4126-a2f2-8f64fb43a82egt123')
        .then(res => {
            expect(res.status).toBe(404);
        });
    }); 


})

describe('POST /', () => {
    beforeEach( async() => {
		await db('coach_specialty_details').truncate();
		await db.seed.run()
	})  
    it('should return status code 201', () => {
        return request(server)
        .post('/api/specialties/')
        .send({name: "Fits"})
        .then(res => {
            expect(res.status).toBe(201);
        });
    }); 


})

describe('PUT /', () => {
    it('should return status code 201', () => {
        return request(server)
        .put('/api/specialties/2e91c857-acc4-4126-a2f2-8f64fb43a82e')
        .send({name: "Finess"})
        .then(res => {
            expect(res.status).toBe(200);
        });
    }); 


})



