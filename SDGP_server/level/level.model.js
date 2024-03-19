const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const levelSchema = new Schema(
  {
    levelName: {
      type: String,
      required: true,
    },
    levelMaterialTexts: {
      type: String,
      required: true,
    },
    levelDescription: {
      type: String,
      required: true,
    },
    levelImage: {
      type: Object,
      required: true,
    },
    levelMaterialImage: {
      type: [],
      required: true,
    },
    courseID: {
      type: Schema.Types.ObjectId,
      ref: "course",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("level", levelSchema);
