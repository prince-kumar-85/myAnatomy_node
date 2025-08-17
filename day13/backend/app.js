const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/Books'); // Import model

const app = express();
const port = 5001

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

app.put("/books/:id",async(req, res)=>{
    const {title,author,year}= req.body
    const updatedBook=await Book.findByIdAndUpdate(req.params.id,{title,author,year},{new:true})
    res.json(updatedBook)
})



app.get('/books/:id',(req,res)=>{
    Book.findById(req.params.id)
    .then(d=>res.send(d))
    console.log("The book id is", req.params.id)
})

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
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
