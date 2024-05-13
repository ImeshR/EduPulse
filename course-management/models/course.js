import mongoose from "mongoose";
import User from "../../user-managment/models/Users.js";

// Register the User model with Mongoose
const UserModel = mongoose.model('User', User.schema);

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
    ref: UserModel,
    required: true,
  },
  img : {
    type: String,
    default: "https://www.vecteezy.com/photo/3595752-love-writing-memorizing-love-reading-to-increase-knowledge"
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
