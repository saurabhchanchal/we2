const express = require('express')
const app = express()


app.get("/",(req,res)=>{    //here we use arrow insted of function
    //res.send("HELLO Saurabha is my name");
    res.send({name: "saurabha"})
});

 app.get("/books",(req,res)=>{
    //  res.send("name:Angelmaker by Nick Harkaway,name:Annabel by Kathleen Winter,name:Atonement by Ian McEwan");
    res.send({bookname:"Angelmaker by Nick Harkaway,name:Annabel by Kathleen Winter,name:Atonement by Ian McEwan"});
 });

app.listen(8000,()=>{
    console.log("listening the port at 8000");
});

