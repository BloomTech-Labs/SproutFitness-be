# API Documentation

#### 1️⃣ Backend STAGING delpoyed at [Heroku](https://sprout-fitness-be-staging.herokuapp.com/) https://sprout-fitness-be-staging.herokuapp.com/ <br>

#### Backend PRODUCTION delpoyed at [Heroku](https://sprout-fitness-be-prod.herokuapp.com/) https://sprout-fitness-be-prod.herokuapp.com/ <br>

## 1️⃣ Getting started

To get the server running locally:


- Clone this repo
- **npm install** to install all required dependencies
- **npm start server** to start the local server
- **npm run server** to start local server using nodemon
- **npm test** to start server using testing environment

### Express JS with PostgreSQL

Reasons we chose Express JS with PostreSQL

-    Familiarity
-    Very common in real world
-    Relational DB

## 2️⃣ Auth Endpoints


| Method | Endpoint               | Description                                  |
| ------ | -----------------------| ---------------------------------------------------------- |
| POST    | `/api/login/coaches` |  Returns id, token and welcome message. |
| POST    | `/api/register/coaches` |  Returns id, token and welcome message.   |
| POST    | `/api/forgot-password/coaches` |  Returns message: "recovery email sent"  |
| POST    | `/api/reset-password/coaches` |  Returns message: "message": "password reset link a-ok"   |
| POST    | `/api/update-password-via-email/coaches` |  Returns message: "message": "message": "password updated"  |


### Helper Routes
-  These routes return multiple objects which might be useful to prevent having to make multiple requests to the server.


| Method | Endpoint               | Description                                  |
| ------ | -----------------------| ---------------------------------------------------------- |
| GET    | `/api/coach_helpers/coach/data/:coachId` |  Returns a coach along with their specialties and certifications. |
| GET    | `/api/coach_helpers/coach/specs/:id` |  Returns a coach's specialties by coachId  |
| GET    | `/api/coach_helpers/spec/coaches/:specialtyId` |  Returns a list of coaches with a given specialty ID  |
| GET    | `/api/coach_helpers/coach/list?&column=<column name>&direction=<desc or asc>` |  Returns a list of coaches ordered by specified column and direction in url query  |
| PUT    | `/api/coaches/:coachId` |  Update a coach by given coach ID.             |
| DELETE | `/api/coaches/:coachId` |  Delete a Coach.                      |

---

### Coaches Table Routes

| Method | Endpoint               | Description                                  |
| ------ | -----------------------| ---------------------------------------------------------- |
| GET    | `/api/coaches` |  Returns all the coaches in the coaches table. |
| GET    | `/api/coaches/:coachId` |  Returns all a coach with given coach ID. |
| POST   | `/api/coaches/` | NA | Create a Coach record |
| PUT    | `/api/coaches/:coachId` |  Update a coach by given coach ID.             |
| DELETE | `/api/coaches/:coachId` |  Delete a Coach.                      |
| POST   | `/api/login/coaches` |  Returns id, token and welcome message. |
| POST   | `/api/register/coaches` |  Returns id, token and welcome message.   |


#### POST Request Body Example (create or update)
```
{
  "id": 1,
  "email": "test@test.com",
  "password": "test",
  "firstname": "Latrina",
  "lastname": "Huang",
  "is_active": 1,
  "language": "english",
  "timezone": "central",
  "picture_url": "https://fakepersongenerator.com/Face/female/female20161024805263550.jpg",
  "city": "Cedar Rapids",
  "country": "USA",
  "bio": "Bio."
}
```
---

### Coach Certification Routes

| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/api/coach_certifications` | NA | Get All the Coach Certifications on the server.               |
| POST   | `/api/coach_certifications/` | NA | Create a Coach certification realted to a coach (coach ID supplied in request body). |
| PUT    | `/api/coach_certifications/:coachId` | NA |                                                    |
| DELETE | `/api/coach_certifications/:coachId` | NA|         |

#### POST Request Body Example (create or update)
```
{
  "name": "Certification Name",
  "coach_id": 1
}
```
---

### Specialties Routes

Specialties created by dev team a Coach can select from and as

| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/api/specialties` | NA | Get All the Specialties on the database.               |
| GET    | `/api/specialties/:specialtyId` | NA | Get All the Specialties by specialty ID.               |
| POST   | `/api/specialties` | NA | Create a new specialty |
| PUT    | `/api/specialties/:specialtyId` | NA |                                                    |
| DELETE | `/api/specialties/:specialtyId` | NA |         |

##### POST Request Body Example (create or update)
```
{
    "name": "Health"
}
```
---

### Coach Specialties Details Routes

Relationship table for Specialties > Coach.

Each specialty a Coach has is a record in this table.

| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/api/coach_specialty_details` | NA | Get All the coach_specialty_detail records on the database.               |
| GET    | `/api/coach_specialty_details/:coach_specialy_detialId` | NA | Get a coach_specialty_detail by record ID.               |
| POST   | `/api/coach_specialty_details` | NA | Create a new coach specialty detail record (a new relationship) |
| PUT    | `/api/coach_specialty_details/:coach_specialy_detialId` | NA |                                                    |
| DELETE | `/api/coach_specialty_details/:coach_specialy_detialId` | NA |         |


##### POST Request Body Example (create or update)
```
{
  "coach_id": 1,
  "specialty_id": 3
}
```
---

# Data Model

### COACHES
---

```
{
  "id": 1,
  "email": "test@test.com",
  "password": "test",
  "firstname": "Latrina",
  "lastname": "Huang",
  "is_active": 1,
  "language": "english",
  "timezone": "central",
  "picture_url": "https://fakepersongenerator.com/Face/female/female20161024805263550.jpg",
  "city": "Cedar Rapids",
  "country": "USA",
  "bio": "Bio."
}
```

### COACH CERTIFICATIONS

---

```
{
  "id": 1,
  "coach_id": 1,
  "name": "NSHC – National Society of Health Coaches",
  "created_at": "2019-12-03T01:18:17.728Z"
}
```

### SPECIALTIES

---

```
{
  "id": 1,
  "name": "Holistic",
  "icon_url": "link"
}

```

### COACH SPECIALTIES DETAILS
 ---

 ```
{
  "id": 1,
  "coach_id": 1,
  "specialty_id": 1,
  "created_at": "2019-12-03T01:18:17.755Z"
}

 ```


## 2️⃣ Actions (Models)

`findAll()` -> Returns all data from the specified table.

`findBy(filter)` -> Returns a single item by specified filter.

`findById(id)` -> Returns a single item by ID.

`add(item)` -> Returns the created object data.

`updateById(id)` -> Update an item by ID.

`deleteById(id)` -> Delete an item by ID.

`updateByEmail` -> Update an item by email.

`updateByFilter`-> Update an item by specified filter.


<br>

`getCoachInfoById(id)` -> Returns an object with the coach record, along with their specialties and certifications.

`getCoachesOrderedBy(column, direction)` -> Returns coach ordered by specified column and direction.

`getCoachSpecsByCoachId(id)` -> Returns coach specialties by specified coach ID.

`getCoachesBySpecsId(id)` -> Returns all coaches with specified specialty by specialty ID.



# DISREGARD ANYTHING BELOW THIS LINE



## 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:

🚫 These are just examples, replace them with the specifics for your app
    
    *  STAGING_DB - optional development db for using functionality not available in SQLite
    *  NODE_ENV - set to "development" until ready for "production"
    *  JWT_SECRET - you can generate this by using a python shell and running import random''.join([random.SystemRandom().choice('abcdefghijklmnopqrstuvwxyz0123456789!@#\$%^&amp;*(-*=+)') for i in range(50)])
    *  SENDGRID_API_KEY - this is generated in your Sendgrid account
    *  stripe_secret - this is generated in the Stripe dashboard
    
## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, to.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation](🚫link to your frontend readme here) for details on the fronend of our project.
🚫 Add DS iOS and/or Andriod links here if applicable.
