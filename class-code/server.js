// imports
const express = require("express") //importing express package
const app = express() // creates a express application
const mongoose = require("mongoose")
const dotenv = require("dotenv").config() //this allows me to use my .env values in this file
const Fruit = require("./models/Fruit")
const fruitsRoutes = require("./routes/fruits.routes")

const morgan = require("morgan")

const methodOverride = require("method-override")
app.use(methodOverride("_method")); // new

app.use(morgan("dev"))



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
app.use("/fruits",fruitsRoutes)


app.listen(3000,()=>{
    console.log("Listening on port 3000")
}) // Listen on port 3000