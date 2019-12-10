const router = require('express').Router();
const bcrypt = require('bcryptjs');
const generateToken = require('../config/token')
const Coaches = require('../models/coaches-model')
const uuidv4 = require('uuid/v4')



router.post('/', (req, res) => {
  let  coach = req.body

  const hash = bcrypt.hashSync(coach.password, 10)
  coach.password=hash
  coach.id = uuidv4()

  if(!coach.email || !coach.password || !coach.firstname || !coach.lastname ) {
    res.status(422).json({message: 'Please enter Email, Password, First Name and Last Name to create an account'})
  } else {
    Coaches.add(coach)
      .then(newCoach => {
        const token = generateToken(newCoach)

        res.status(200).json({  
          message: `Welcome ${newCoach.firstname}. You have been successfully registered!`,
          id: newCoach.id,
          token: token
        })
      })
      .catch(err => {
        res.status(500)
        .json({ err, message: "Sorry, but something went wrong while registering" })
      })
  }
})


module.exports = router