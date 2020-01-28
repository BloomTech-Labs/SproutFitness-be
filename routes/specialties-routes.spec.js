const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');

 xdescribe('Coaches specialties /api/specialties', () => {
    beforeEach( async() => {
		await db.seed.run()
	})  

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
    it('should return status code 201', () => {
        return request(server)
        .post('/api/specialties/')
        .send({name: "Fits"})
        .then(res => {
            expect(res.status).toBe(201);
        });
    }); 

    it('should return status code 404 if only 3 characters or less', () => {
        return request(server)
        .post('/api/specialties')
        .send({name : 'Fit'})
        .then(res => {
            expect(res.status).toBe(404);
        });
    }); 
    it('should return status code 404 if first letter is not capitalized', () => {
        return request(server)
        .post('/api/specialties')
        .send({name : 'wel'})
        .then(res => {
            expect(res.status).toBe(404);
        });
    })
})

describe('PUT /', () => {
    
    it('should return status code 201', () => {
        return request(server)
        .put('/api/specialties/08ea05a4-2ea0-4e15-80a0-236b86e2fb99')
        .send({name: "Finess"})
        .then(res => {
            expect(res.status).toBe(200);
        });
    }); 
    it('if id has too many characters return status 404', async () => {
        return request(server)
         .put('/api/specialties/2e91c857-acc4-4126-a2f2-8f64fb43a82egt123')
         .then(res => {
             expect(res.status).toBe(404);
         });
     }); 
     it('should return status code 404', () => {
        return request(server)
        .put('/api/specialties/2e91c857-acc4-4126-a2f2-8f64fb43a82e')
        .send({name : ''})
        .then(res => {
            expect(res.status).toBe(404);
        });
    }); 


})

describe('Delete /', () => {
    it('should return status code 201', () => {
        return request(server)
        .delete('/api/specialties/27e866be-37af-466e-8d81-ff331cddf0d6')
        .then(res => {
            expect(res.status).toBe(200);
        });
    }); 
    it('if id is not uuid return status 404', async () => {
        return request(server)
        .delete('/api/specialties/gt123')
        .then(res => {
            expect(res.status).toBe(404);
        });
    }); 



})




