const router = require('express').Router()
const Coaches = require('../models/coaches-model')

// This endpoint being hit when you click link in email sent to you from the system
// Hit this endpoint in componentDidMound. 
// If result is true, render reset password form to the screen, else show error message
  router.get('/', (req, res) => {
    const resetPasswordToken = req.query.resetPasswordToken
     Coaches.findBy({resetPasswordToken})
     .then(user => {
       //console.log('USER:', user)

      if(user == null || user == undefined || user.resetPasswordExpires < Date.now()) {
        console.error('password reset link is invalid or has expired');
        res.status(403).send('password reset link is invalid or has expired');
      } else {
        res.status(200).send({
          email: user.email,
          message: 'password reset link a-ok',
       })
      }
     })
  })



module.exports = router