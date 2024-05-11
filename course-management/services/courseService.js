import Course from "../models/course.js";
import UserEnrollment from "../models/userEnrollment.js";
import { createPaymentIntent } from "../../payment-management/services/stripeService.js";
import { sendEmail } from "./emailService.js";
import { get } from "http";

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

//delete course by id
const deleteCourse = async (id) => {
  try {
    const course = await Course.findByIdAndDelete(id);
    return {
      message: "Course deleted successfully",
    };
  } catch (error) {
    return {
      message: "Failed to delete course",
      error: error.message,
    };
  }
};

//enroll a user to a course
const enrollUserToCourse = async (courseId, userId) => {
  //find course by id
  const course = await getCourseById(courseId);
  if (!course) {
    return {
      message: "Course not found",
    };
  }

  //find user enrollment
  const userEnrollment = await UserEnrollment.findOne({
    courseId,
    userId,
  });

  if(userEnrollment){
    return {
      message: "User already enrolled to the course",
    };
  }

  // //create payment intent
  const response = await createPaymentIntent(userId, course.price, courseId);

  // if (response.error) {
  //   return {
  //     message: "Failed to enroll user to the course",
  //     error: response.error,
  //   };
  // }

  // if (!userEnrollment) {
  //   const userEnrollment = new UserEnrollment({
  //     userId,
  //     courseId,
  //     paymentIntentId: response.data.id,
  //   });

  //   //send email
  //   await sendEmail(
  //     "imesh6687@gmail.com",
  //     "Course Enrollment",
  //     `You have successfully enrolled to the course ${course.name}`,
  //     `<p>
  //     You have successfully enrolled to the course ${course.name}. 
  //     Your payment of $${course.price} has been successfully processed.
  //   </p>`
  //   );

  //   await userEnrollment.save();
  //   return {
  //     message: "User enrolled to the course successfully",
  //     data: userEnrollment,
  //   };
  // }

  // if (userEnrollment) {
  //   return {
  //     message: "User already enrolled to the course",
  //   };
  // }
};

export {
  createCourse,
  updateCourse,
  getAllCourses,
  getCourseById,
  deleteCourse,
  enrollUserToCourse,
};