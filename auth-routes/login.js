const router = require('express').Router();
const bcrypt = require('bcryptjs');
const generateToken = require('../config/token')
const Coaches = require('../models/coaches-model')


router.post('/', (req, res) => {
  let {email, password} = req.body

  if(!req.body.email || !req.body.password) {
    res.status(422).json({message: 'Please provide a email and a password to log in'})
  } else {
    Coaches.findBy({email}).first()
    .then(coach => {
      if(coach && bcrypt.compareSync(password, coach.password)) {
        const token = generateToken(coach)

        res.status(200).json({
          message: `Welcome ${coach.firstname}!`,
          id: coach.id, 
          token: token
        })

      } else {
        res.status(401).json({message: 'Invalid credentials'})
      }
    })
    .catch(err => {
      res.status(500) 
      .json({ message: "Sorry, but something went wrong while logging in" });
    })
  }
})



module.exports = router