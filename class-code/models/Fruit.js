const {model, Schema} = require("mongoose")

const fruitSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    isReadyToEat:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

const Fruit = model("Fruit",fruitSchema)

module.exports = Fruit