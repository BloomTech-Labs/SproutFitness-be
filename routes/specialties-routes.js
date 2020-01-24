const router = require('express').Router();
const Specialties = require('../models/specialties-model');
const uuidv4 = require('uuid/v4')
const express = require('express');
const server = express();

server.use(express.json());


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
    if (id.length < 36)  {
      res.status(404).json({
        message: `The id may be missing characters. Not a uuid`
      });
  
    } else if (id.length === 0)  {
      res.status(404).json({
        message: `Not id given.`
      });
  
    } else if(id.length !== 36) {
      res.status(404).json({
        message: `The id has too many characters. Not a uuid.`
      });
  
    }
  
    
    
  }
});

router.post('/', async (req, res) => {
  const value = Object.values(req.body)
  const newVal = value.toString()
  if(newVal[0] !== newVal[0].toUpperCase()) {
    res.status(404).json({
      message: "Speciatly must be capitalized."
    })

  } else if(newVal.length <= 3) {
    res.status(404).json({
      message: "Specialty name must be more thant 3 characters"
    })
  }
  const specialty = req.body;
  specialty.id = uuidv4()
  try {
    const newSpecialty = await Specialties.add(specialty);
    res.status(201).json(newSpecialty);
  } catch (error) {
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const value = Object.values(req.body)
  const newVal = value.toString()

  if (id.length > 36)  {
    res.status(404).json({
      message: `The id may be missing characters. Not a uuid`
    });

  } else if(newVal.length <= 0) {
    res.status(404).json({
      message: "No body provided"
    })
  }
 
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
  }
});

router.delete('/:id', async (req, res) => {

  const { id } = req.params;
  if (id.length < 36)  {
    res.status(404).json({
      message: `The id may be missing characters. Not a uuid`
    });

  } 
  try {
    const delSpecialtyCount = await Specialties.deleteById(id);
    const specialty = await Specialties.findById(id);

    if (!delSpecialtyCount) {
      res.status(404).json({
        message: `Could not find specialty with ID: ${id}`
      });
    }
    res.status(200).json({delSpecialtyCount,
    specialty: specialty
    });
  } catch (error) {
    if(id.length > 36) {
      res.status(404).json({
        message: `The id has too many characters. Not a uuid.`
      });
  }
  }
});




module.exports = router;
