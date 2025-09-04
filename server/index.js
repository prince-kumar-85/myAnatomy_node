const express=require('express');
const app=express();
const PORT=3003;


const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopping_cart').then(()=>{
    console.log('Connected to MongoDB');        
}).catch((err)=>{
    console.log('Error connecting to MongoDB',err);
})
//middleware
app.use(express.json());

//Product Schema
const Product= mongoose.model('product',{
    name:{type:String,required:true},
    price:{type:Number,required:true}  ,
    description:String,
})



app.get('/',(req,res)=>{
    res.send('I am making shoping app!');
});


app.get('/items',async(req,res)=>{
    const products =await Product.find()
    res.send(products);
})

app.post("/items",async(req,res)=>{
    const product= new Product(req.body);
    await product.save();
    res.json(product);
})

app.put('/items/:id',async(req,res)=>{
    const {id} = req.params;
    const updatedProduct= await Product.findByIdAndUpdate(id,req.body,{new:true});
    res.json(updatedProduct);
});

app.delete('/items/:id',async(req,res)=>{
   await Product.findByIdAndDelete(req.params.id)
    res.json({message:"Product deleted"})

});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
}
);