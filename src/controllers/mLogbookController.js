const { createNewLogbookEntry } = require('../services/mLogbookService');
const AppError = require('../utils/appError');

async function createLogbookEntry(req, res) {
    try {
        // Call the service layer to create a new logbook entry
        const response = await createNewLogbookEntry(req.body);
        return res.status(201).json({
            message: 'Successfully created the logbook entry',
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
    createLogbookEntry,
};
