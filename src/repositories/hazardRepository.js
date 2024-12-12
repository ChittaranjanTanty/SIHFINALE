const HazardReport = require('../schema/hazardSchema'); // Import the Hazard schema
const BadRequestError = require('../utils/badRequestError');
const InternalServerError = require('../utils/internalServerError');

// Function to create a new hazard report
async function createHazardReport(hazardDetails) {
  try {
    const newHazard = await HazardReport.create(hazardDetails);
    return newHazard;
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errorMessageList = Object.keys(error.errors).map((property) => {
        return error.errors[property].message;
      });
      console.error('Validation Error:', errorMessageList);
      throw new BadRequestError(errorMessageList);
    }
    console.error('Error creating hazard report:', error);
    throw new InternalServerError('Failed to create hazard report.');
  }
}

// Function to fetch all hazard reports
async function getAllHazardReports() {
  try {
    const hazards = await HazardReport.find();
    return hazards;
  } catch (error) {
    console.error('Error fetching hazard reports:', error);
    throw new InternalServerError('Failed to fetch hazard reports.');
  }
}

module.exports = {
  createHazardReport,
  getAllHazardReports,
};
