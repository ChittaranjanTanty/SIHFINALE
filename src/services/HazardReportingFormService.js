const { createHazardReport, getAllHazardReports } = require("../repositories/HazardReprtingFormRepository");

async function createNewHazardReport(hazardDetails) {
    console.log("Hitting service layer for creating a new hazard report");

    // Create a new hazard report in the database
    const newHazardReport = await createHazardReport({
        reportDate: hazardDetails.reportDate,
        supervisorName: hazardDetails.supervisorName,
        mineName: hazardDetails.mineName,
        hazardLocation: hazardDetails.hazardLocation,
        natureOfHazard: hazardDetails.natureOfHazard,
        hazardDescription: hazardDetails.hazardDescription,
        actionTaken: hazardDetails.actionTaken || null, // Optional field
        acknowledgment: hazardDetails.acknowledgment,
    });

    if (!newHazardReport) {
        throw { reason: "Something went wrong, cannot create hazard report", statusCode: 500 };
    }

    // Return the details of the created hazard report
    return newHazardReport;
}

async function fetchAllHazardReports() {
    console.log("Hitting service layer for fetching all hazard reports");

    // Fetch all hazard reports from the database
    const hazardReports = await getAllHazardReports();

    if (!hazardReports || hazardReports.length === 0) {
        throw { reason: "No hazard reports found", statusCode: 404 };
    }

    // Return the list of hazard reports
    return hazardReports;
}

module.exports = {
    createNewHazardReport,
    fetchAllHazardReports, // Export the function for fetching hazard reports
};
