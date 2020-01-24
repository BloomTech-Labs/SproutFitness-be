const router = require('express').Router()
const Coaches = require('../models/coaches-model')
const protect = require('../middleware/protected.js')

// Get ALL Coaches - Test route
router.get('/', (req, res) => {
    Coaches.findAll()
        .then(coaches => {
            res.status(200).json(coaches)
        })
        .catch(error => {
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
        if (id.length > 36) {
            res.status(404).json({
                message: `No a`
            })

        }
        res.status(200).json(coach)

    } catch(error) {
    }
})

router.post('/', async (req, res, next) => {
    const coach = req.body
    
    try {
        if (coach.firstname.length <= 0) {
            res.status(400).json({
                message: "Field is empty. Please enter info"
            })
        } 
    
        const newCoach = await Coaches.add(coach)
        res.status(201).json(newCoach)
    } catch(error) {
    
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
    }
})



module.exports = router