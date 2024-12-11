const mongoose = require("mongoose");

const hazardReportSchema = new mongoose.Schema(
  {
    reportDate: {
      type: String,
      required: true,
    },
    supervisorName: {
      type: String,
      required: true,
    },
    mineName: {
      type: String,
      required: true,
    },
    hazardLocation: {
      type: String,
      required: true,
    },
    natureOfHazard: {
      type: String,
      enum: ["Ventilation", "Roof", "Mechanical", "LooseMaterials", "Other"],
      required: true,
    },
    hazardDescription: {
      type: String,
      required: true,
    },
    actionTaken: {
      type: String,
      default: "", // Optional, not required
    },
    acknowledgment: {
      type: Boolean,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

const HazardReportForm = mongoose.model("HazardReportForm", hazardReportSchema);

module.exports = HazardReportForm;
