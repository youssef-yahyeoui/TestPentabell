const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: false, maxlength: 300 },
  finished: { type: Boolean, required: false },
  created_at: { type: Date, required: true },
  finished_at: { type: Date, required: true },
  updated_at: { type: Date, required: false },
  idUser: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
  },
});
module.exports = mongoose.model("Todo", todoSchema);
