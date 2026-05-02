// Pehle apna Model yahan import karein
const Blog = require('../models/Blog');

// 1. Naya Blog banane ka logic (Jo POST request mein chalega)
const createBlog = async (req, res) => {
    try {
        const newBlog = new Blog({
            title: req.body.title,
            content: req.body.content,
            author: req.body.author
        });
        await newBlog.save(); 
        res.status(201).json({ message: "Blog Successfully Create Ho Gaya!", data: newBlog });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 2. Saare Blogs dekhne ka logic (Jo GET request mein chalega)
const getBlogs = async (req, res) => {
    try {
        const allBlogs = await Blog.find();
        res.status(200).json(allBlogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// In dono functions ko export kar dein
module.exports = { createBlog, getBlogs };