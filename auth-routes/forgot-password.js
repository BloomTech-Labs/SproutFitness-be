const router = require('express').Router()
const nodemailer = require('nodemailer');
const crypto = require("crypto")
const Coaches = require('../models/coaches-model')


// This endpoint is being hit when you click "Send password reset email" button and sends you a link to reset password.
router.post('/', async (req, res) => {
  const newUser = req.body
  const email = req.body.email

  if (!email || email === '') {
    res.status(400).send('email required')
    return;
  }

 try {
  const user = await Coaches.findBy({ email }).first()
  console.log(user)

  if (user === null || user === undefined) {
    console.error('email not in database');
    res.status(403).send('email not in db');
    return;
  }

    const token = crypto.randomBytes(20).toString('hex')
    req.body.resetPasswordToken = token,
    req.body.resetPasswordExpires = Date.now() + 360000, // link expires in 6 minutes

    await Coaches.updateByEmail(email, newUser)

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `${process.env.EMAIL_ADDRESS}`,
      pass: `${process.env.EMAIL_PASSWORD}`,
    },
  });

  const mailOptions = {
    from: 'Sprout fitness',
    to: `${user.email}`,
    subject: 'Link To Reset Password',
    text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
      'Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n' +
      `http://localhost:3000/reset-password/${token}\n\n` +
      'If you did not request this, please ignore this email and your password will remain unchanged.\n',
  };

  console.log('sending mail');

  transporter.sendMail(mailOptions, (err, response) => {
    if (err) {
      console.error('there was an error: ', err);
    } else {
      console.log('here is the res: ', response);
      res.status(200).json('recovery email sent');
    }
  })
  } catch (err) {
    res.status(500).json({
      error: "Internal Server error",
      message: err.message
    })
  }
})


module.exports = router