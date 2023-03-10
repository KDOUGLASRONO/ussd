const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
require('dotenv').config();

//mongoose issue
mongoose.set('strictQuery',false);


const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//mongo db connection

const MONGO_URI=process.env.MONGO_URI

const connection = ()=>{
    try{
        mongoose.connect(MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
        })
        .then(()=>{
            console.log("Connected to database");
        })
    }
    catch(err){
        console.log(err);
    }
}

connection(); //calling connection function

//get method
app.get('/',(req,res)=>{
    res.send("Success");
})

app.post('/',(req,res)=>{
    try{
        console.log("success", req.body);
        res.send("Post Success", req.body);
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
    
})

const port=process.env.PORT;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})