const { createLogbook, getLogbooksByShift } = require('../repositories/logbookRepository');

// Service for creating a new logbook
async function createLogbookEntry(logbookDetails) {
  console.log('Hitting service layer for creating a logbook entry');
  const newLogbook = await createLogbook(logbookDetails);
  return newLogbook;
}

// Service for fetching logbooks by shift
async function fetchLogbooksByShift(shift) {
  console.log('Hitting service layer for fetching logbooks by shift');
  const logbooks = await getLogbooksByShift(shift);
  return logbooks;
}

module.exports = {
  createLogbookEntry,
  fetchLogbooksByShift,
};
