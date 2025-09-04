const express=require('express');

const app=express();

app.get('/',(req, resp)=>{
    resp.send("app is deting rund by the server")
})

app.listen(5000,()=>{
    console.log("this is app folder")
})