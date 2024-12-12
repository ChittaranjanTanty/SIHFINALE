const { createHazardReportEntry, fetchAllHazardReports } = require('../services/hazardService');

// Controller for creating a hazard report
async function createHazard(req, res) {
  try {
    const hazardDetails = req.body; // Extract details from the request body
    const hazardReport = await createHazardReportEntry(hazardDetails);
    res.status(201).json({ message: 'Hazard report created successfully!', hazardReport });
  } catch (error) {
    console.error('Error in createHazard controller:', error);
    res.status(error.statusCode || 500).json({ message: error.message || 'Failed to create hazard report.' });
  }
}

// Controller for fetching all hazard reports
async function getAllHazards(req, res) {
  try {
    const hazards = await fetchAllHazardReports();
    res.status(200).json(hazards);
  } catch (error) {
    console.error('Error in getAllHazards controller:', error);
    res.status(error.statusCode || 500).json({ message: error.message || 'Failed to fetch hazard reports.' });
  }
}

module.exports = {
  createHazard,
  getAllHazards,
};
