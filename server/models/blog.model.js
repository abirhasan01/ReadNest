const mongoose = require("mongoose")

const BlogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true
  },
  isPublished: {
    type: Boolean,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const BlogModel = mongoose.model("blog", BlogSchema)

module.exports = BlogModel