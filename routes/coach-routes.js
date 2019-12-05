const router = require('express').Router()
const Coaches = require('../models/coaches-model')
const protect = require('../middleware/protected.js')

// Get ALL Coaches - Test route
router.get('/', protect, (req, res) => {
    Coaches.findAll()
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

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const coach = await Coaches.findById(id)
        if(!coach) {
            res.status(404).json({
                message: `Could not find Coach with ID: ${id}`
            })
        }
        res.status(200).json(coach)

    } catch(error) {
        res.status(500).json({
            message: "There was an error with the server.",
            error
        })
    }
})

router.post('/', async (req, res) => {
    const coach = req.body
    try {
        const newCoach = await Coaches.add(coach)
        res.status(201).json(newCoach)
    } catch(error) {
        res.status(500).json({
            message: `Could not add Coach to the server`,
            error: error
        })
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const newCoachData = req.body
    try {
        const updatedCoach = await Coaches.updateById(id, newCoachData)
        if(!updatedCoach) {
            res.status(400).json({
                message: `Could not find Coach with ID: ${id}`
            })
        }
        res.status(200).json(updatedCoach)
    } catch(error) {
        res.status(500).json({
            message: `Could not update Coach with ID ${id}`,
            error: error
        })
    }
    
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const delCoachCount = await Coaches.deleteById(id)
        if (!delCoachCount) {
            res.status(404).json({
                message: `Could not find Coach with ID: ${id}`
            })
        } 
        res.status(200).json(delCoachCount)
    } catch(error) {
        res.status(500).json({
            message: `Could not delete Coach with ID: ${id}`,
            error: error
        })
    }
})



module.exports = router