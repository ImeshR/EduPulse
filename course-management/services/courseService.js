import Course from "../models/course.js";

//create a course
const createCourse = async (name, description, summary, createdBy, price, duration, courseContent) => {
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
    }
  } catch (error) {
    return {
      message: "Failed to create course",
    };
  }
};


export { createCourse };