// Load environment variables first
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/Books'); // Import model
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;

// Middlewares
app.use(express.json());
app.use(cors());

// Connect to MongoDB
const mongo = process.env.MONGO_URI;
mongoose.connect(mongo)
    .then(() => console.log("✅ MongoDB connected"))
    .catch(err => console.error("❌ MongoDB connection error:", err));

// Default route
app.get('/', (req, res) => {
    res.send("🚀 API is running...");
});

// ------------------- Books API -------------------

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
        if (!books || books.length === 0) {
            return res.json({ message: "No books found" });
        }
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get a book by ID (GET)
app.get('/books/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.json(book);
    } catch (err) {
        res.status(500).json({ error: "Invalid ID or book not found" });
    }
});

// Update a book by ID (PUT)
app.put('/books/:id', async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.json(updatedBook);
    } catch (err) {
        res.status(500).json({ message: "Failed to update book" });
    }
});

// Delete a book by ID (DELETE)
app.delete('/books/:id', async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.json({ message: "Book deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Failed to delete book" });
    }
});

// ------------------- End Books API -------------------

// Start Server
app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
});
