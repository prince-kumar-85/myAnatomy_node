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

app.put("/books/:id", async (req, res) => {
    const { title, author, year } = req.body;
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            { title, author, year },
            { new: true }
        );
        if (!updatedBook) {
            return res.status(404).json({ message: "updation id is not found" });
        }
        res.json(updatedBook);
    } catch (err) {
        res.status(500).json({ message: "Failed to update Book" });
    }
});




app.get('/books/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id); 
        if (!book) {
            return res.status(404).json({ message: "id is not found" });
        }
        res.send(book);
        console.log("The book id is", req.params.id);
    } catch (err) {
        res.status(500).json({ message: 'id is not found' });
    }
});

// Get all books (GET)
app.get('/books', async (req, res) => {
    try {
        const books = await Book.find();
        if(!books){
            res.json({message:"book is empty"})
        }else{
        res.json(books);
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/books/:id',async(req,resp)=>{
    try{
        const deletebook=await Book.findByIdAndDelete(req.params.id);
        if(!deletebook){
            resp.status(404).json({message:'book is not found'})
        }
        
        resp.json({message:"Book deleted"})
    }catch(err){
        resp.status(500).json({message:"Error"})
    }
    
})

// Start server
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
