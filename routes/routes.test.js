const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');

describe('testing suite for routes', () => {

	beforeEach( async() => {
		await db.seed.run();
	}) 

	describe('Coaches certifications tests /api/coach_certifications', () => {
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

	describe('Coaches specialty details tests /api/coach_specialty_details', () => {
		describe('GET /', () => {
			it('should return object with seed data', () => {
				return request(server)
				.get('/api/coach_specialty_details')
				.then(res => {
					expect(typeof res).toBe('object');
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
					expect(typeof res).toBe('object');
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
					expect(typeof res).toBe('object')
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
					expect(typeof res).toBe('object')
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
					expect(typeof res).toBe('object')
					expect(res.status).toBe(200)
					expect(res.body).toBe(1)
				});
			});
		});
	});
	
	

	// Jasmison
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
			.put('/api/specialties/2e91c857-acc4-4126-a2f2-8f64fb43a82e')
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
			.delete('/api/specialties/2e91c857-acc4-4126-a2f2-8f64fb43a82e')
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
});