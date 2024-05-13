import express from "express";
import {
  createCourse,
  updateCourse,
  getAllCourses,
  getCourseById,
  deleteCourse,
  enrollUserToCourse,
  cancelEnrollment,
  getUserEnrolledCourses,
  getUserEnrolledCompletedCourses,
} from "../services/courseService.js";

const router = express.Router();

//create a course
router.post("/create", async (req, res) => {
  try {
    const {
      name,
      description,
      summary,
      createdBy,
      price,
      duration,
      courseContent,
    } = req.body;
    const course = await createCourse(
      name,
      description,
      summary,
      createdBy,
      price,
      duration,
      courseContent
    );
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//update a course by id
router.put("/update/:id", async (req, res) => {
  try {
    const {
      name,
      description,
      summary,
      createdBy,
      price,
      duration,
      courseContent,
    } = req.body;
    const course = await updateCourse(
      req.params.id,
      name,
      description,
      summary,
      createdBy,
      price,
      duration,
      courseContent
    );
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//get all courses
router.get("/getAll", async (req, res) => {
  try {
    const courses = await getAllCourses();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//get course by id
router.get("/:id", async (req, res) => {
  try {
    const course = await getCourseById(req.params.id);
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//delete course by id\
router.delete("/:id", async (req, res) => {
  try {
    const course = await deleteCourse(req.params.id);
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//enroll a user to a course
router.post("/enroll", async (req, res) => {
  try {
    const { courseId, userId, transactionId } = req.body;
    const course = await enrollUserToCourse(courseId, userId, transactionId);
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//cancel a user enrollment to a course
router.post("/cancelEnrollment", async (req, res) => {
  try {
    const { courseId, userId } = req.body;
    const course = await cancelEnrollment(courseId, userId);
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//get user enrolled courses
router.get("/enrolledCourses/:userId", async (req, res) => {
  try {
    const courses = await getUserEnrolledCourses(req.params.userId);
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//get all user completed courses
router.get("/completedCourses/:userId", async (req, res) => {
  try {
    const courses = await getUserEnrolledCompletedCourses(req.params.userId);
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
