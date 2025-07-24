const Fruit = require('../models/Fruit')
const router = require("express").Router()
// For posting we need 2 routes

router.get("/create",(req,res)=>{

    res.render("create.ejs")
})


router.post("/create",async (req,res)=>{
    console.log(req.body)
    if(req.body.isReadyToEat === "on"){
        req.body.isReadyToEat = true
    }
    console.log("After",req.body)
    
    try{
    await Fruit.create(req.body)
    res.redirect("/fruits")

    }catch(error){
        console.log(error)
    }
})


router.get("/",async (req,res)=>{
    try{
    const allFruits = await Fruit.find()
    res.render("fruits/all-fruits.ejs",{allFruits: allFruits})

    }
    catch(error){
        console.log(error)
    }
})


router.get("/yusef",(req,res)=>{
    res.send("Yusef route")
})

router.get("/:fruitId",async (req,res)=>{
    console.log(req.params)
    try{
    const foundFruit = await Fruit.findById(req.params.fruitId)
    console.log(foundFruit)
    res.render("fruit/fruit-details.ejs",{foundFruit})

    }
    catch(error){
        console.log(error)
    }
})

router.delete("/:id", async (req,res)=>{
    console.log(req.params)
    try{
        const deletedFruit = await Fruit.findByIdAndDelete(req.params.id)
        res.redirect("/fruits")
    }
    catch(error){
        console.log(error)
    }
})



// UPDATE

router.get("/:id/update",async(req,res)=>{
    try{
        const foundFruit = await Fruit.findById(req.params.id)
        res.render("fruit-update.ejs",{foundFruit})
    }
    catch(error){
        console.log(error)
    }
})


router.put("/:fruitId",async(req,res)=>{
    if(req.body.isReadyToEat === "on"){
        req.body.isReadyToEat = true
    }
    const updatedFruit = await  Fruit.findByIdAndUpdate(req.params.fruitId, req.body)
    res.redirect("/fruits")
})


module.exports = router