const express = require('express');
const { createHazard, getAllHazards } = require('../controllers/hazardController');

// Initialize a router object to handle hazard report-related routes
const hazardReportRouter = express.Router();

// Route to create a new hazard report
hazardReportRouter.post('/hazards', createHazard);

// Route to fetch all hazard reports
hazardReportRouter.get('/hazards', getAllHazards);

module.exports = hazardReportRouter; // Exporting the router
