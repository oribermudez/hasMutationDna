const mongoose = require("mongoose");

const SequenceSchema = new mongoose.Schema (
  {
    sequence: {type: Array},
    hasMutation: {type: Boolean},
    id: { type: String },
  },
  { timestamps: true }
);

const SequenceModel = mongoose.model("sequence", SequenceSchema);

module.exports = SequenceModel;