const express = require('express');
const mongoose = require('mongoose');

// Apna naya Route import karein
const blogRoutes = require('./routes/blogRoutes');

const app = express();

// Middleware
app.use(express.json());

// Database Connection
mongoose.connect('mongodb+srv://kholaazeem104_db_user:khola123@cluster0.yiaih2l.mongodb.net/my_blog_db')
    .then(() => console.log('Cloud Database Connected Successfully!'))
    .catch((err) => console.log('Database Error: ', err));

// Routes Use Karna
app.use('/api/blogs', blogRoutes);

// Server Start
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});