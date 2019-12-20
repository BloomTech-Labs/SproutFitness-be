const router = require('express').Router();
const CoachCerts = require('../models/coach-certifications-model');
const uuidv4 = require('uuid/v4')

// Get ALL Certs - Test route
router.get('/', (req, res) => {
  CoachCerts.findAll()
    .then(certs => {
      res.status(200).json(certs);
    })
    .catch(error => {
      res.status(500).json({
        message: 'Sorry could not get certs from the server',
        error
      });
    });
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const cert = await CoachCerts.findById(id);
    if (!cert) {
      res.status(404).json({
        message: `Could not find cert with ID: ${id}`
      });
    }
    res.status(200).json(cert);
  } catch (error) {
    res.status(500).json({
      message: 'There was an error with the server.',
      error
    });
  }
});

router.post('/', async (req, res) => {
  const cert = req.body;
  cert.id = uuidv4()
  try {
    const newCert = await CoachCerts.add(cert);
    res.status(201).json(newCert);
  } catch (error) {
    res.status(500).json({
      message: `Could not add cert to the server`,
      error: error
    });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const newCertData = req.body;
  try {
    const updatedCert = await CoachCerts.updateById(id, newCertData);
    if (!updatedCert) {
      res.status(400).json({
        message: `Could not find cert with ID: ${id}`
      });
    }
    res.status(200).json(updatedCert);
  } catch (error) {
    res.status(500).json({
      message: `Could not update cert with ID ${id}`,
      error: error
    });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const delCertCount = await CoachCerts.deleteById(id);
    if (!delCertCount) {
      res.status(404).json({
        message: `Could not find cert with ID: ${id}`
      });
    }
    res.status(200).json(delCertCount);
  } catch (error) {
    res.status(500).json({
      message: `Could not delete cert with ID: ${id}`,
      error: error
    });
  }
});

module.exports = router;
