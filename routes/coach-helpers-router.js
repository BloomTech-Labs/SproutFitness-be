const router = require('express').Router()
const Coaches = require('../models/coaches-model')

router.get('/coach/data/:id', async (req, res) => {
    const { id } = req.params
    try {
        const coachInfo = await Coaches.getCoachInfoById(id)
        
        if(!coachInfo) {
            res.status(404).json({
                message: `Could not find Coach data with ID: ${id}`
            }) 
        }
        res.status(200).json(coachInfo)
    } catch(error) {
        res.status(500).json({
            message: `Could not get Coach info for ID: ${id}`
        })
    }
})

// GET COACH SPECIALTIES BY ID
router.get('/coach/specs/:id', async (req, res) => {
    const { id } = req.params
    try {
        const coachSpecs = await Coaches.getCoachSpecsById(id)
        
        if(!coachSpecs) {
            res.status(404).json({
                message: `Could not find Coach specialties with ID: ${id}`
            }) 
        }
        res.status(200).json(coachSpecs)
    } catch(error) {
        res.status(500).json({
            message: `Could not get Coach specialties for ID: ${id}`
        })
    }
})

module.exports = router

