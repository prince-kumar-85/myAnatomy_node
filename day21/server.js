const express=require('express')
const app=express();
const PORT = 3003
const bcrypt=require('bcrypt');

app.use(express.json())

app.get('/',(req, rep)=>{
    rep.send("I am learninh bcrypt")
})

const users=[]

app.post("/users",async(req, resp)=>{
    const salt =await bcrypt.genSalt()
    const hashedOne= await bcrypt.hash(req.body.password, 10)
    console.log("The salt is  this "+salt)
    console.log("This is password "+hashedOne)

    const user={name :req.body.name , password:hashedOne}

    users.push(user)
    resp.status(201).send("User Created successfully")
})


app.post("/users/login",async(req, res)=>{
    const user= users.find(user=> user.name===req.body.name)
    if(user===null){
        return res.status(400).send("cannot find the user")
    }
    try{
        if(await bcrypt.compare(req.body.password,user.password)){
            res.send("seccess")
        }else{
            res.send("not allowed")
        }
    }catch (error){
        res.status(500).send(error);
        
    }
})




app.listen(PORT,()=>{
    console.log("welcome to encryption demo")
})
