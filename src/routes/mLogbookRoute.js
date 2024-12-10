const express = require('express');
const { createLogbookEntry } = require('../controllers/mLogbookController');

// Initialize a router object to handle logbook-related routes
const logbookRouter = express.Router();

// Route to create a new logbook entry
logbookRouter.post('/', createLogbookEntry);

module.exports = logbookRouter; // Exporting the router
