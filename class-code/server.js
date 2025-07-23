// imports
const express = require("express") //importing express package
const app = express() // creates a express application
const mongoose = require("mongoose")
const dotenv = require("dotenv").config() //this allows me to use my .env values in this file
const Fruit = require("./models/Fruit")



// Middleware
app.use(express.static('public')); //all static files are in the public folder
app.use(express.urlencoded({ extended: false })); // this will allow us to see the data being sent in the POST or PUT



async function conntectToDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to Database")
    }
    catch(error){
        console.log("Error Occured",error)
    }
}

conntectToDB()





// Routes go here



// For posting we need 2 routes

app.get("/fruits/create",(req,res)=>{

    res.render("create.ejs")
})


app.post("/fruits/create",(req,res)=>{
    console.log(req.body)
    if(req.body.isReadyToEat === "on"){
        req.body.isReadyToEat = true
    }
    console.log("After",req.body)
    
    Fruit.create(req.body)
    res.redirect("/fruits")
})





app.listen(3000,()=>{
    console.log("Listening on port 3000")
}) // Listen on port 3000