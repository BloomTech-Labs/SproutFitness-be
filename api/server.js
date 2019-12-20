const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const coachesRouter = require('../routes/coach-routes.js');
const coachCertsRouter = require('../routes/coach-certifications-routes');
const specialtiesRouter = require('../routes/specialties-routes');
const CoachSpecialtyDetailsRouter = require('../routes/coach-specialty-details-routes');
const register = require('../auth-routes/register')
const login = require('../auth-routes/login')
const forgotPassword = require('../auth-routes/forgot-password')
const resetPassword = require('../auth-routes/reset-password')
const updatePasswordViaEmail = require('../auth-routes/updatePasswordViaEmail')

const coachHelpersRouter = require('../routes/coach-helpers-router')

const server = express();

// 3rd PARTY MIDDLEWARE
server.use(helmet());
server.use(express.json());
server.use(cors());

// Routes
server.use('/api/register/coaches', register);
server.use('/api/login/coaches', login);
server.use('/api/forgot-password/coaches', forgotPassword);
server.use('/api/reset-password/coaches', resetPassword);
server.use('/api/update-password-via-email/coaches', updatePasswordViaEmail)
server.use('/api/specialties', specialtiesRouter);
server.use('/api/coaches', coachesRouter);
server.use('/api/coach_certifications', coachCertsRouter);
server.use('/api/coach_specialty_details', CoachSpecialtyDetailsRouter);

server.use('/api/coach_helpers', coachHelpersRouter)

// TEST SERVER
server.get('/', (req, res) => {
  res.status(200).json({
    message: 'Server is up'
  });
});

module.exports = server;
