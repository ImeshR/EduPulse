import Course from "../models/course.js";

//create a course
const createCourse = async (
  name,
  description,
  summary,
  createdBy,
  price,
  duration,
  courseContent
) => {
  try {
    const course = new Course({
      name,
      description,
      summary,
      createdBy,
      price,
      duration,
      courseContent,
    });
    await course.save();
    return {
      message: "Course created successfully",
      data: course,
    };
  } catch (error) {
    return {
      message: "Failed to create course",
    };
  }
};

//update a course by id
const updateCourse = async (
  id,
  name,
  description,
  summary,
  createdBy,
  price,
  duration,
  courseContent
) => {
  try {
    const course = await Course.findById(id);
    if (!course) {
      return {
        message: "Course not found",
      };
    }
    course.name = name;
    course.description = description;
    course.summary = summary;
    course.createdBy = createdBy;
    course.price = price;
    course.duration = duration;
    course.courseContent = courseContent;
    await course.save();
    return {
      message: "Course updated successfully",
      data: course,
    };
  } catch (error) {
    return {
      message: "Failed to update course",
    };
  }
};

//get all courses
const getAllCourses = async () => {
  try {
    const courses = await Course.find().populate(
      "createdBy",
      "firstName lastName email"
    );
    return {
      data: courses,
    };
  } catch (error) {
    return {
      message: "Failed to get courses",
      error: error.message,
    };
  }
};

//get course by id
const getCourseById = async (id) => {
  try {
    const course = await Course.findById(id);
    return {
      data: course,
    };
  } catch (error) {
    return {
      message: "Failed to get course",
      error: error.message,
    };
  }
};

export { createCourse, updateCourse, getAllCourses, getCourseById };
