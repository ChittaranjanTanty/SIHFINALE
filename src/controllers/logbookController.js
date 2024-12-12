const { createLogbookEntry, fetchLogbooksByShift } = require('../services/logbookService');

// Controller for creating a logbook entry
async function createLogbook(req, res) {
  try {
    const logbookDetails = req.body;
    const logbook = await createLogbookEntry(logbookDetails);
    res.status(201).json({ message: 'Logbook created successfully!', logbook });
  } catch (error) {
    console.error('Error in createLogbook controller:', error);
    res.status(error.statusCode || 500).json({ message: error.message || 'Failed to create logbook.' });
  }
}

// Controller for fetching logbooks by shift
async function getLogbooksByShift(req, res) {
  const { shift } = req.params;
  try {
    const logbooks = await fetchLogbooksByShift(shift);
    res.status(200).json(logbooks);
  } catch (error) {
    console.error('Error in getLogbooksByShift controller:', error);
    res.status(error.statusCode || 500).json({ message: error.message || 'Failed to fetch logbooks.' });
  }
}

module.exports = {
  createLogbook,
  getLogbooksByShift,
};
