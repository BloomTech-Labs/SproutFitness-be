const router = require('express').Router();
const Specialties = require('../models/specialties-model');
const uuidv4 = require('uuid/v4')


// Get ALL Specialties - Test route
router.get('/', (req, res) => {
  Specialties.findAll()
    .then(specialty => {
      res.status(200).json(specialty);
    })
    .catch(error => {
      res.status(500).json({
        message: 'Sorry could not get specialties from the server',
        error
      });
    });
});


router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const specialty = await Specialties.findById(id);
    if (!specialty) {
      res.status(404).json({
        message: `Could not find specialty with ID: ${id}`
      });
    }
    res.status(200).json(specialty);
  } catch (error) {
    res.status(500).json({
      message: 'There was an error with the server.',
      error
    });
  }
});

router.post('/', async (req, res) => {
  const specialty = req.body;
  specialty.id = uuidv4()
  try {
    const newSpecialty = await Specialties.add(specialty);
    res.status(201).json(newSpecialty);
  } catch (error) {
    res.status(500).json({
      message: `Could not add specialty to the server`,
      error: error
    });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const newSpecialtyData = req.body;
  try {
    const updatedSpecialty = await Specialties.updateById(id, newSpecialtyData);
    if (!updatedSpecialty) {
      res.status(400).json({
        message: `Could not find specialty with ID: ${id}`
      });
    }
    res.status(200).json(updatedSpecialty);
  } catch (error) {
    res.status(500).json({
      message: `Could not update specialty with ID ${id}`,
      error: error
    });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const delSpecialtyCount = await Specialties.deleteById(id);
    if (!delSpecialtyCount) {
      res.status(404).json({
        message: `Could not find specialty with ID: ${id}`
      });
    }
    res.status(200).json(delSpecialtyCount);
  } catch (error) {
    res.status(500).json({
      message: `Could not delete specialty with ID: ${id}`,
      error: error
    });
  }
});




module.exports = router;
