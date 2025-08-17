const express = require('express');
const app = express();

app.get('/', (req, resp) => {
    resp.send("hello world");
});
app.use(express.json())

// app.get('/user/:id', (req, res) => {
//     const userId = req.params.id;
//     res.send(`User id is: ${userId}`);
// });

// app.post("/data",(req,res)=>{
//     const {movie,actor}=req.body
//     res.send(`The ${movie} of the ${actor} is too good`)
// })
// app.get("/data",(req,resp)=>{
//     const {movie,actor}=req.body
//     resp.send(`The ${movie} of the ${actor} is too good`);
//     console.log(req.body.movie)
// })

app.listen(3001, () => {
    console.log("hellofbef 500");
});
