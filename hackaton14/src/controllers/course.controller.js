// const Course = require('.');
const Course = require('../models/course.model.js');

const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.findAll();
        return res.status(200).json(courses);
    } catch (error) {           
        console.error('Error fetching courses:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}   

const getCourseById = async (req, res) => {
    const { id } = req.query; 
    if (!id) {
        return res.status(400).json({ message: 'Course ID is required' });
    }   
    try {
        const course = await Course.findByPk(id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        return res.status(200).json(course);
    } catch (error) {
        console.error('Error fetching course:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const createCourse = async (req, res) => {
    const { name, description, img, cover, value } = req.body;

    if (!name || !description) {
        return res.status(400).json({ message: 'Name, description are required' });
    }

    try {
        const newCourse = await Course.create({
            name,
            description,
            img,
            cover,
            value
        });

        return res.status(201).json({
            message: 'Course created successfully',
            course: newCourse
        });

    } catch (error) {
        console.error('Error creating course:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}   

const updateCourse = async (req, res) => {
    const { id } = req.query;
    const { name, description, img, cover, value } = req.body;

    if (!id) {
        return res.status(400).json({ message: 'Course ID is required' });
    }

    try {
        const course = await Course.findByPk(id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        await course.update({
            name,
            description,
            img,
            cover,
            value
        });

        return res.status(200).json({
            message: 'Course updated successfully',
            course
        });

    } catch (error) {
        console.error('Error updating course:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}   

const deleteCourse = async (req, res) => {
    const { id } = req.query;

    if (!id) {
        return res.status(400).json({ message: 'Course ID is required' });
    }

    try {
        const course = await Course.findByPk(id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        await course.destroy();

        return res.status(200).json({
            message: 'Course deleted successfully'
        });

    } catch (error) {
        console.error('Error deleting course:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}   

module.exports = {
    getAllCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse
};
