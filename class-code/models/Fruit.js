const mongoose = require("mongoose")

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    isReadyToEat:{
        type:Boolean,
        Default:false
    }
},{timestamps:true})

const Fruit = mongoose.model("Fruit",fruitSchema)

module.exports = Fruit