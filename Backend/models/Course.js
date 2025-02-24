const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  thumbnail: {
    type: String,
    default: "",
  },
  content: [
    {
      sectionTitle: String,
      lectures: [
        {
          title: String,
          type: String, // e.g., "video", "quiz", "text"
          url: String, // Link to video or resource
          content: String, // For text-based material
        },
      ],
    },
  ],
  categories: [
    {
      type: String,
    },
  ],
  ratings: {
    average: { type: Number, default: 0 },
    count: { type: Number, default: 0 },
  },
  enrollmentCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Course", courseSchema);
