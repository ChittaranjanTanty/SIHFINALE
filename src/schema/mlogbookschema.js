const mongoose = require('mongoose');

const logbookSchema = new mongoose.Schema({
    operatorName: {
      type: String,
      required: true,
    },
    vehicleType: {
      type: String,
      required: true,
    },
    vehicleNumber: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    issuesDescription: {
      type: String,
      required: false,
    },
  }, { timestamps: true });

  const mLogbook=mongoose.model("mLogbook",logbookSchema)

  module.exports = mLogbook;