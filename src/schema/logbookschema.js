const mongoose = require('mongoose');

const logbookSchema = new mongoose.Schema({
  shift: { type: String, required: true },
  basicDetails: {
    supervisorName: String,
    inspectionTime: String,
    shift: String,
    mineName: String,
    seamName: String,
    district1: String,
    district2: String,
    date: String,
    shiftHours: String,
    latitude: String,
    longitude: String,
    partsInspected: String,
  },
  safetyMaterials: [
    { id: Number, name: String, status: String, action: String },
  ],
  ventilationDevices: [
    { id: Number, name: String, condition: String, action: String },
  ],
  safetyObservations: [String],
  createdAt: { type: Date, default: Date.now },
});

  // Create Model
const Logbook = mongoose.model('Logbook', logbookSchema);

module.exports=Logbook