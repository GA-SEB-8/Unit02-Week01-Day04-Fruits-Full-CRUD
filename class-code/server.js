// imports
const express = require("express") //importing express package
const app = express() // creates a express application
const mongoose = require("mongoose")


// Middleware
app.use(express.static('public')); //all static files are in the public folder



async function conntectToDB(){
    try{
        await mongoose.connect("mongodb+srv://omar1:1234@cluster0.g3jfckx.mongodb.net/fruits?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Connected to Database")
    }
    catch(error){
        console.log("Error Occured",error)
    }
}

conntectToDB()





// Routes go here










app.listen(3000,()=>{
    console.log("Listening on port 3000")
}) // Listen on port 3000