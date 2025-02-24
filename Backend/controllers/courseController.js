const Course = require('../models/Course');

// @desc    Create a new course
// @route   POST /api/courses
// @access  Private/Seller
const createCourse = async (req, res) => {
  try {
    const { title, description, price, thumbnail, categories } = req.body;
    
    const newCourse = new Course({
      title,
      description,
      price,
      seller: req.user.id,
      thumbnail,
      categories
    });

    await newCourse.save();
    res.status(201).json(newCourse);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Get all courses
// @route   GET /api/courses
// @access  Public
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find()
      .populate('seller', 'username email')
      .select('-content');
    res.json(courses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Get single course by ID
// @route   GET /api/courses/:id
// @access  Public
const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate('seller', 'username email');
    
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.json(course);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Update course details
// @route   PUT /api/courses/:id
// @access  Private/Seller
const updateCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Check ownership
    if (course.seller.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to update this course' });
    }

    const { title, description, price, thumbnail, categories } = req.body;
    
    course.title = title || course.title;
    course.description = description || course.description;
    course.price = price || course.price;
    course.thumbnail = thumbnail || course.thumbnail;
    course.categories = categories || course.categories;

    await course.save();
    res.json(course);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Delete a course
// @route   DELETE /api/courses/:id
// @access  Private/Seller
const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Check ownership
    if (course.seller.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to delete this course' });
    }

    await course.remove();
    res.json({ message: 'Course removed' });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Add rating to course
// @route   POST /api/courses/:id/ratings
// @access  Private
const addRating = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    const { rating } = req.body;

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Update ratings
    course.ratings.count += 1;
    course.ratings.average = 
      (course.ratings.average * (course.ratings.count - 1) + rating) / course.ratings.count;

    await course.save();
    res.json(course.ratings);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Add section to course content
// @route   POST /api/courses/:id/sections
// @access  Private/Seller
const addSection = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    const { sectionTitle } = req.body;

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Check ownership
    if (course.seller.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to modify this course' });
    }

    course.content.push({ sectionTitle, lectures: [] });
    await course.save();
    res.json(course.content);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Add lecture to section
// @route   POST /api/courses/:id/sections/:sectionId/lectures
// @access  Private/Seller
const addLecture = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    const { title, type, url, content } = req.body;

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Check ownership
    if (course.seller.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to modify this course' });
    }

    const section = course.content.id(req.params.sectionId);
    if (!section) {
      return res.status(404).json({ message: 'Section not found' });
    }

    section.lectures.push({ title, type, url, content });
    await course.save();
    res.json(section.lectures);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Increment enrollment count
// @route   POST /api/courses/:id/enroll
// @access  Private
const enrollCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    course.enrollmentCount += 1;
    await course.save();
    res.json({ enrollmentCount: course.enrollmentCount });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
  addRating,
  addSection,
  addLecture,
  enrollCourse
};