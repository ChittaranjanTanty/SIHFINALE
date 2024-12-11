const HazardReportForm = require('../schema/hazardReportingFormSchema'); // Adjust the path as necessary
const BadRequestError = require('../utils/badRequestError');
const InternalServerError = require('../utils/internalServerError');

async function createHazardReport(hazardDetails) {
    try {
        const response = await HazardReportForm.create(hazardDetails);
        return response;
    } catch (error) {
        if (error.name === 'ValidationError') {
            const errorMessageList = Object.keys(error.errors).map((property) => {
                return error.errors[property].message;
            });
            console.log(errorMessageList);
            throw new BadRequestError(errorMessageList);
        }
        console.error(error);
        throw new InternalServerError("Failed to create hazard report");
    }
}

async function getAllHazardReports() {
    try {
        const response = await HazardReportForm.find(); // Fetch all hazard report entries
        return response;
    } catch (error) {
        console.error(error);
        throw new InternalServerError("Failed to fetch hazard reports");
    }
}

module.exports = {
    createHazardReport,
    getAllHazardReports,
};
