const express=require('express');
const jwt= require('jsonwebtoken');
const app=express();
const PORT=3000;
app.use(express.json())


app.get('/',(req, res)=>{
    res.json({message :"jwt token"})
})

app.post("/posts",(req, res)=>{
    jwt.verify(req.token,'secret',(err,authData)=>{
        if(err){
            res.sendStatus(403);
        }
        else{
            res.json({
                message:"post created",
                
        })
    }})
})

app.post("/login",(req, res)=>{
    const user={
        id:1,
        user:"jwt-demo",
        email:"prince@gmai.com"
    }

    jwt.sign({user:user},'secret',(err,token)=>{
        res.json({
            token  // uses of token see in the nest call
            
        })
    })
})

function verifyToken(req, res, next){
    const bearerheaders=req.headers['authorization'];
    if(typeof bearerheaders !== 'undefined'){
        const bearer=bearerheaders.split(' ');
        const bearertoken=bearer[1];
        req.token=bearertoken;
        next();
    }   
    else{
        res.sendStatus(403);  //forbidden
    }
}

app.listen(PORT,()=>{
    console.log("json web token")
})