const router = require('express').Router();
const CSD = require('../models/coach-specialty-details-model');
const uuidv4 = require('uuid/v4')

// Get ALL Certs - Test route
router.get('/', (req, res) => {
  CSD.findAll()
    .then(csds => {
      res.status(200).json(csds);
    })
    .catch(error => {
      res.status(500).json({
        message: `Sorry could not get csd's from the server`,
        error
      });
    });
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const csd = await CSD.findById(id);
    if (!csd) {
      res.status(404).json({
        message: `Could not find csd with ID: ${id}`
      });
    }
    res.status(200).json(csd);
  } catch (error) {
    res.status(500).json({
      message: 'There was an error with the server.',
      error
    });
  }
});

router.post('/', async (req, res) => {
  const csd = req.body;
  csd.id = uuidv4()
  try {
    const newCSD = await CSD.add(csd);
    res.status(201).json(newCSD);
  } catch (error) {
    res.status(500).json({
      message: `Could not add csd to the server`,
      error: error
    });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const newCSDData = req.body;
  try {
    const updatedCSD = await CSD.updateById(id, newCSDData);
    if (!updatedCSD) {
      res.status(400).json({
        message: `Could not find csd with ID: ${id}`
      });
    }
    res.status(200).json(updatedCSD);
  } catch (error) {
    res.status(500).json({
      message: `Could not update csd with ID ${id}`,
      error: error
    });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const delCSDCount = await CSD.deleteById(id);
    if (!delCSDCount) {
      res.status(404).json({
        message: `Could not find csd with ID: ${id}`
      });
    }
    res.status(200).json(delCSDCount);
  } catch (error) {
    res.status(500).json({
      message: `Could not delete csd with ID: ${id}`,
      error: error
    });
  }
});

module.exports = router;
