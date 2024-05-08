import express from 'express';
import { createCourse } from '../services/courseService.js';

const router = express.Router();

//create a course
router.post("/create", async (req, res) => {
  try {
    const { name, description, summary, createdBy, price, duration, courseContent } = req.body;
    const course = await createCourse(name, description, summary, createdBy, price, duration, courseContent);
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


export default router;