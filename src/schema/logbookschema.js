const mongoose = require('mongoose');

const logbookSchema = new mongoose.Schema({
    shift: { type: String, required: true, index: true }, // Add index for efficient querying
    basicDetails: Object,
    safetyMaterials: Array,
    ventilationDevices: Array,
    safetyObservations: Array,
    createdAt: { type: Date, default: Date.now },
  });

  // Create Model
const Logbook = mongoose.model('Logbook', logbookSchema);

module.exports=Logbook