const express = require('express');
const { protect, isSeller } = require('../middleware/authMiddleware');
const {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
  addRating,
  addSection,
  addLecture,
  enrollCourse
} = require('../controllers/courseController');

const router = express.Router();

// Public routes
router.get('/', getCourses);
router.get('/:id', getCourseById);

// Protected routes
router.post('/:id/ratings', protect, addRating);
router.post('/:id/enroll', protect, enrollCourse);

// Seller routes
router.post('/', protect, isSeller, createCourse);
router.put('/:id', protect, isSeller, updateCourse);
router.delete('/:id', protect, isSeller, deleteCourse);
router.post('/:id/sections', protect, isSeller, addSection);
router.post('/:id/sections/:sectionId/lectures', protect, isSeller, addLecture);

module.exports = router;