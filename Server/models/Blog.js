const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 100,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    publicId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    tags: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
