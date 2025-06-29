const express = require('express');
const { getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse } = require('../controllers/course.controller');

const router = express.Router();

router.get('/', getAllCourses);
router.get('/byId', getCourseById);
router.post('/', createCourse);
router.put('/', updateCourse);
router.delete('/', deleteCourse)

module.exports = router;