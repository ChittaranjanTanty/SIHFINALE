const mongoose = require("mongoose");
const hazardSchema = new mongoose.Schema({
    reportDate: { type: String, required: true },
    name: { type: String, required: true },
    mineName: { type: String, required: true },
    hazardLocation: { type: String, required: true },
    natureOfHazard: { type: String, required: true },
    hazardDescription: { type: String, required: true },
    actionTaken: { type: String },
  });
  
  const hazardsSchema = mongoose.model("hazardsSchema", hazardSchema);

  module.exports=hazardsSchema;


  