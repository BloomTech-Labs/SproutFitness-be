const router = require('express').Router()
const bcrypt = require('bcryptjs')
const Coaches = require('../models/coaches-model')
const BCRYPT_SALT_ROUNDS = 12;


// This endpoint is being hit when you click "update password button" after you got verified and reset password form was rendered to the screen
  router.put('/', async (req, res) => {
    const newUser = req.body
    const resetPasswordToken = req.body.resetPasswordToken

    try {
      const user = await Coaches.findBy({ resetPasswordToken }).first()
      console.log('USER:', user)
    
        if (user == null || user.resetPasswordExpires < Date.now()) {
          console.error('password reset link is invalid or has expired');
          res.status(403).send('password reset link is invalid or has expired');
        } else  {
          console.log('user exists in db')
          const hashedPassword = bcrypt.hashSync(req.body.password, BCRYPT_SALT_ROUNDS)
          req.body.password = hashedPassword,
          req.body.resetPasswordToken = null,
          req.body.resetPasswordExpires = null,
          await Coaches.updateByFilter(resetPasswordToken, newUser)
            
          console.log('password updated');
          res.status(200).send({ message: 'password updated' });
        } 
    } catch (err) {
      res.status(500).json({
        error: "Internal Server error",
        message: err.message
      })
    }
  })



module.exports = router