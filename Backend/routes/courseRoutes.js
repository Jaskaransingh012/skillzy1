// courseRoutes.js
const express = require('express');
const { createCourse, getCourses } = require('../controllers/courseController');
const { protect, isSeller } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, isSeller, createCourse);
router.get('/', getCourses);

module.exports = router;