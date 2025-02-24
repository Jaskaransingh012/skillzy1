const Course = require('../models/Course');

// Create course (Seller only)
const createCourse = async (req, res) => {
  try {
    const { title, description, price, thumbnail } = req.body;
    
    const newCourse = new Course({
      title,
      description,
      price,
      seller: req.user.id,
      thumbnail
    });

    await newCourse.save();
    res.json(newCourse);

  } catch (err) {
    res.status(500).send('Server error');
  }
};

// Get all courses
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate('seller', 'username');
    res.json(courses);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

module.exports = { createCourse, getCourses };