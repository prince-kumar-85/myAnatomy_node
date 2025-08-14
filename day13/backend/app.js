const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/Books'); // Import model

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/newBooks')
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("MongoDB Error:", err));

// Default route
app.get("/", (req, res) => {
    res.send("I love book");
});

// Create a new book (POST)
app.post('/books', async (req, res) => {
    try {
        const newBook = new Book(req.body);
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all books (GET)
app.get('/books', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start server
app.listen(5001, () => {
    console.log("Server running on http://localhost:5001");
});
