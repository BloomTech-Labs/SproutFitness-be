const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');
const dbCoaches = require('../models/coaches-model.js');
const router = require('../routes/coach-routes.js');

describe('Coaches router', () => {
  describe('GET /', () => {
    it('should return an object', () => {
      return request(server)
        .get('/coaches')
        .then(res => {
          expect(typeof res).toBe('object');
        });
    });

    it("should return a JSON", function() {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.type).toMatch(/json/i);
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



  describe('GET requests for Coaches routers /:id', () => {
    describe('GET /api/coaches/adf4b829-9d72-406f-8db2-de69e9655c60', () => {
      it('returns 200 ok', () => {
         request(router)
        .get('/')
         .then(res => {
          expect(res.status).toBe(200)
         })
      })
      it('should return 401 if id does not exist', () => {
        request(router)
        .get('/api/coaches/1')
          .then(res => {
           expect(res.status).toBe(404)
          })  
     })
     it('should return 404 if id does not exist', () => {
      const id = 'adf4b829-9d72-406f-8db2-de69e9655c6052'
      request(router)
      .get(`/api/coaches/${id}`)
        .then(res => {
         expect(res.status).toBe(404)
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
        it('should return 404 if coach does not exist', async () => {
          let name =  await dbCoaches.updateById('adf4b829-9d72-406f-8db2-de69e9655c60')
          return request(server)
          .put('/api/coaches/1')
          res.send(name)
          .then(res => {
            expect(res.status).toBe(404)
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
  it('should return status 400 if wrong id', () => {
    let response = request(server).delete('/api/coaches/1')
    .then(res => {
      expect(res.status).toBe(400)

    })

  })
 })



