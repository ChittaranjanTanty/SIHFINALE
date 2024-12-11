const express = require('express');
const { createHazardReport, getAllHazardReports } = require('../controllers/HazardReportingFormController');

// Initialize a router object to handle hazard report-related routes
const hazardReportRouter = express.Router();

// Route to create a new hazard report
hazardReportRouter.post('/create', createHazardReport);

// Route to fetch all hazard reports
hazardReportRouter.get('/all', getAllHazardReports);

module.exports = hazardReportRouter; // Exporting the router
