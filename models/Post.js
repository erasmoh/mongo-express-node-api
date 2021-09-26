const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    detault: Date.now,
  },
});

module.exports = mongoose.model("Posts", PostSchema);
