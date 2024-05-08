import mongoose from "mongoose";

const { Schema } = mongoose;

const courseContentSchema = new Schema({
  videoLink: {
    type: String,
    required: true,
  },
  instructions: {
    type: [String],
    required: true,
  },
});

const courseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  summary: {
    type: [String],
    required: true,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  courseContent: {
    type: [courseContentSchema],
    required: true,
  },
});

const Course = mongoose.model("Course", courseSchema);

export default Course;
