const express = require('express');
const { createLogbookEntry, getAllLogbookEntries } = require('../controllers/mLogbookController');

// Initialize a router object to handle logbook-related routes
const logbookRouter = express.Router();

// Route to create a new logbook entry
logbookRouter.post('/create', createLogbookEntry);

// Route to fetch all logbook entries
logbookRouter.get('/all', getAllLogbookEntries);

module.exports = logbookRouter; // Exporting the router
