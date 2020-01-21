const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');
const dbCoaches = require('../models/coaches-model.js');
const coachRouter = require('../routes/coach-routes.js');

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

describe('Get requests for Coaches routers /', () => {
  describe('GET /', () => {
    it('returns 200 ok', () => {
       return request(server)
      .get('/')
      .then(res => {
          expect(res.status).toBe(200)
        })
    })
    })
  })

  describe('GET requests for Coaches routers /:id', () => {
    describe('GET /api/coaches/adf4b829-9d72-406f-8db2-de69e9655c60', () => {
      it('returns 200 ok', () => {
         return request(server)
         .get('/api/coaches/adf4b829-9d72-406f-8db2-de69e9655c60')
         .then(res => {
            expect(res.status).toBe(200)
          })
      })
      })
    })
  

  describe('PUT requests Coaches routers /:id', () => {
    describe('PUT /api/coaches/adf4b829-9d72-406f-8db2-de69e9655c60', () => {
      it('should return 202 when new user property from a user is changed', () => {
        return request(server)
        .put('/api/coaches/adf4b829-9d72-406f-8db2-de69e9655c60')
        .send({ firstname: "Jamison" })
          .then(res => {
            expect(res.status).toBe(200)
          })
        })
        it('should change the name inside database', async () => {
          let name =  await dbCoaches.updateById('adf4b829-9d72-406f-8db2-de69e9655c60', {firstame: "Craig"})
          return request(server)
          .put('/api/coaches/adf4b829-9d72-406f-8db2-de69e9655c60')
          .then(res => {
            expect(res.body.api).toBe(201)
          })
        })
        it("should return a JSON", function() {
          return request(server)
            .put('/api/coaches/adf4b829-9d72-406f-8db2-de69e9655c60')
            .then(res => {
              expect(res.type).toMatch(/json/i);
            });
        });
      })
    })

 describe('POST /api/coaches', () => {
    it('should return status code 201', async () => {
      let response = await request(server).post('/api/coaches')
        .send({firstname: 'user', password: 'password'})
       expect(response.status).toBe(201)
    })
    it('should return status code 400 if fields are empty', async () => {
      const user = 
      { 
          firstname: "",
      }
      let response = await request(server).post('/api/coaches/')
        .send(user)
       expect(response.status).toBe(400)
    })

 })


  describe('Delete /api/coaches/:id', () => {
    it('should return status code 200', () => {
      let response = request(server).delete('/api/coaches/adf4b829-9d72-406f-8db2-de69e9655c60')
      .then(res => {
       expect(res.status).toBe(200)
    })
  })

 })

 

