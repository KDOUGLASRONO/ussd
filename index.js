const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

//mongoose issue
mongoose.set('strictQuery',false);


const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//mongo db connection

const MONGO_URI="mongodb+srv://rhon0:smartDouglas@rhon0.68t8q9k.mongodb.net/USSD?retryWrites=true&w=majority"

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

const port=3000
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})