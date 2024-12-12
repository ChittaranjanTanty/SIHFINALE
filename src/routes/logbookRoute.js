const express = require('express');
const { createLogbook, getLogbooksByShift } = require('../controllers/logbookController');

const router = express.Router();

// Route for creating a logbook
router.post('/logbook', createLogbook);

// Route for fetching logbooks by shift
router.get('/logbook/:shift', getLogbooksByShift);

module.exports = router;
