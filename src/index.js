const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Ye middleware hai jo Postman se aane wale JSON data ko samajhne mein madad karta hai
app.use(express.json());

// 1. Database Connection (MongoDB Compass background mein open hona chahiye)
mongoose.connect('mongodb+srv://kholaazeem104_db_user:khola123@cluster0.yiaih2l.mongodb.net/')
    .then(() => console.log('Database Connected Successfully!'))
    .catch((err) => console.log('Database Error: ', err));

// 2. Schema Banana (Blog kaisa dikhega)
const blogSchema = new mongoose.Schema({
    title: String,     // Topic ka naam (e.g., "Mongoose Kya Hai?")
    content: String,   // Topic ki details
    author: String     // Likhne wale ka naam
});
const Blog = mongoose.model('Blog', blogSchema);

// 3. API Route: Naya Blog Banane Ke Liye (Miss ye Postman par POST karke check karengi)
app.post('/api/blogs', async (req, res) => {
    try {
        const newBlog = new Blog({
            title: req.body.title,
            content: req.body.content,
            author: req.body.author
        });
        
        await newBlog.save(); // Database mein save kar dega
        res.status(201).json({ message: "Blog Successfully Create Ho Gaya!", data: newBlog });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 4. API Route: Saare Blogs Dekhne Ke Liye (Miss ye Postman par GET karke check karengi)
app.get('/api/blogs', async (req, res) => {
    try {
        const allBlogs = await Blog.find(); // Database se saare blogs nikaal layega
        res.status(200).json(allBlogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 5. Server Start Karna
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});