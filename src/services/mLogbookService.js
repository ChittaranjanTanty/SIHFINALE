const { createLogbook, getAllLogbooks } = require("../repositories/mLogbookRepository");

async function createNewLogbookEntry(logbookDetails) {
    console.log("Hitting service layer for creating a new logbook entry");

    // Create a new logbook entry in the database
    const newLogbookEntry = await createLogbook({
        operatorName: logbookDetails.operatorName,
        vehicleType: logbookDetails.vehicleType,
        vehicleNumber: logbookDetails.vehicleNumber,
        startTime: logbookDetails.startTime,
        endTime: logbookDetails.endTime,
        issuesDescription: logbookDetails.issuesDescription || null, // Optional field
    });

    if (!newLogbookEntry) {
        throw { reason: "Something went wrong, cannot create logbook entry", statusCode: 500 };
    }

    // Return the details of the created logbook entry
    return newLogbookEntry;
}

async function fetchAllLogbookEntries() {
    console.log("Hitting service layer for fetching all logbook entries");

    // Fetch all logbook entries from the database
    const logbookEntries = await getAllLogbooks();

    if (!logbookEntries || logbookEntries.length === 0) {
        throw { reason: "No logbook entries found", statusCode: 404 };
    }

    // Return the list of logbook entries
    return logbookEntries;
}

module.exports = {
    createNewLogbookEntry,
    fetchAllLogbookEntries, // Export the new function for fetching logbooks
};

