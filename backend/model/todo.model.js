const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Todo = new Schema({
  description: {
    type: String,
    required: true,
  },
  responsible: {
    type: String,
    required: true,
  },
  priority: String,

  completed: Boolean,
});

module.exports = mongoose.model("Todo", Todo);
