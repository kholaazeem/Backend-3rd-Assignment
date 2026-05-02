const express = require('express');
const router = express.Router();

// Apna controller yahan mangwayein
const { createBlog, getBlogs } = require('../controllers/blogController');

// Routes ko controller ke sath jor dein
router.post('/', createBlog); // Naya blog banane ka route
router.get('/', getBlogs);    // Saare blogs dekhne ka route

module.exports = router;