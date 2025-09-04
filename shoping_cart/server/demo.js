const express = require('express');
const app = express();
const PORT = 3000;


//middleware
app.use(express.json());

app.get('/', (req, res) => {
    // res.json({message:"Some express concept"});
    res.send(req.body.id);
    console.log(req.body.id)
}
);

app.get('/user/:id',(req,res)=>{
    res.send(req.params.id);
    console.log(req.params) 
})


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})