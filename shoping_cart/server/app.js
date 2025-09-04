const express=require('express');
const cors=require('cors');
const app=express();
const PORT=3003;
app.use(cors());


const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopping_cart').then(()=>{
    console.log('Connected to MongoDB');        
}).catch((err)=>{
    console.log('Error connecting to MongoDB',err);
})
//middleware
app.use(express.json());

//Product Schema
const Product= mongoose.model('newItems',{
    name:{type:String,required:true},
    price:{type:Number,required:true}  ,
    description:{type:String,required:true},
})



app.get('/',(req,res)=>{
    res.send('I am making shoping app!');
});


app.get('/items',async(req,res)=>{
    try{
    const products =await Product.find()
    res.status(200).json(products);
    }catch(err){
        res.status(500).json("The error is",err.message)
    }
})

app.post("/items",async(req,res)=>{

    try{
    const product= new Product(req.body);
    const saveProduct=await product.save();
    res.status(201).json(saveProduct);
    }catch(err){
        res.status(400).json("The error is",err.message)
    }
})

app.put('/items/:id',async(req,res)=>{
    try{
    const {id} = req.params;
    const updatedProduct= await Product.findByIdAndUpdate(id,req.body,{new:true});
    if(!updatedProduct){
        return res.status(404).json({message:"Product not found"});
    }
    res.status(200).json(updatedProduct);
    }catch(err){
        res.status(400).json("The error is",err.message)
    }

});

app.delete('/items/:id',async(req,res)=>{
    try{
   const deletedProduct=await Product.findByIdAndDelete(req.params.id)
   if(!deletedProduct){
    return res.status(404).json({message:"Product not found"});
   }
    res.status(200).json({message:"Product deleted"})
}catch(err){
    res.status(500).json("The error is",err.message)
}

});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
}
);