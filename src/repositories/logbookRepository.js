const Logbook = require('../schema/logbookschema');
const BadRequestError = require('../utils/badRequestError');
const InternalServerError = require('../utils/internalServerError');

// Create a new logbook entry
async function createLogbook(logbookDetails) {
  try {
    const logbook = await Logbook.create(logbookDetails);
    return logbook;
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errorMessageList = Object.keys(error.errors).map((property) => {
        return error.errors[property].message;
      });
      console.error('Validation error:', errorMessageList);
      throw new BadRequestError(errorMessageList);
    }
    console.error('Error creating logbook:', error);
    throw new InternalServerError('Failed to create logbook.');
  }
}

// Fetch logbooks by shift
async function getLogbooksByShift(shift) {
  try {
    const logbooks = await Logbook.find({ shift });
    return logbooks;
  } catch (error) {
    console.error('Error fetching logbooks:', error);
    throw new InternalServerError('Failed to fetch logbooks.');
  }
}

module.exports = {
  createLogbook,
  getLogbooksByShift,
};
