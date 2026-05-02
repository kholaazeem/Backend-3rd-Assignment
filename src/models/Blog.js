const mongoose = require('mongoose');

// Ye wohi schema hai jo humne index.js mein banaya tha
const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String
});

// Isay export kar rahe hain taakay baqi files isay use kar sakein
module.exports = mongoose.model('Blog', blogSchema);