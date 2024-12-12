const { createHazardReport, getAllHazardReports } = require('../repositories/hazardRepository');

// Service for creating a new hazard report
async function createHazardReportEntry(hazardDetails) {
  console.log('Hitting service layer for creating a hazard report');
  const newHazardReport = await createHazardReport(hazardDetails);
  return newHazardReport;
}

// Service for fetching all hazard reports
async function fetchAllHazardReports() {
  console.log('Hitting service layer for fetching all hazard reports');
  const hazards = await getAllHazardReports();
  return hazards;
}

module.exports = {
  createHazardReportEntry,
  fetchAllHazardReports,
};
