const { createNewHazardReport, fetchAllHazardReports } = require('../services/HazardReportingFormService');
const AppError = require('../utils/appError');

async function createHazardReport(req, res) {
    try {
        // Call the service layer to create a new hazard report
        const response = await createNewHazardReport(req.body);
        return res.status(201).json({
            message: 'Successfully created the hazard report',
            success: true,
            data: response,
            error: {}
        });
    } catch (error) {
        if (error instanceof AppError) {
            return res.status(error.statusCode).json({
                success: false,
                message: error.message,
                data: {},
                error: error
            });
        }
        return res.status(error.statusCode || 500).json({
            success: false,
            message: error.reason || 'Internal Server Error',
            data: {},
            error: error
        });
    }
}

async function getAllHazardReports(req, res) {
    try {
        // Call the service layer to fetch all hazard reports
        const response = await fetchAllHazardReports();
        return res.status(200).json({
            message: 'Successfully fetched all hazard reports',
            success: true,
            data: response,
            error: {}
        });
    } catch (error) {
        if (error instanceof AppError) {
            return res.status(error.statusCode).json({
                success: false,
                message: error.message,
                data: {},
                error: error
            });
        }
        return res.status(error.statusCode || 500).json({
            success: false,
            message: error.reason || 'Internal Server Error',
            data: {},
            error: error
        });
    }
}

module.exports = {
    createHazardReport,
    getAllHazardReports, // Export the function for fetching hazard reports
};
