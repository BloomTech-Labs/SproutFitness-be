const router = require('express').Router()
const Coaches = require('../models/coaches-model')

router.get('/', (req, res) => {
    Coaches.find()
        .then(coaches => {
            res.status(200).json(coaches)
        })
        .catch(error => {
            res.status(500).json({
                message: 'Sorry could not get coaches from the server',
                error
            })
        })

})



module.exports = router