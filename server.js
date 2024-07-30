const express = require("express")
require('dotenv').config()
const mongo = require("mongoose") // imported 
const product = require('./models/productmodel') // calling fun
const detail = require('./models/detailmodel') // calling fun for detail model
const app = express()
const productsRouter = require('./products'); // calling fun
const products = require("./products");
app.use(express.json()) // imported json


// Image uploaded using multer
const multer = require('multer') // imported multer 
const path = require('path') // path set

app.use(express.static(__dirname))

storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,path.join(__dirname,"images"))
    },
    filename:(req,file,cb)=>{
        cb(null,file.filename+Date.now()+file.originalname)
    }
})

const upload = multer({storage:storage})

app.post('/images',upload.single("photo"),(req,res)=>{     // field name and folder name
    res.send("Image Uploaded Successfully")    // message
})


app.get('/images',async (req,res)=>{
    try{
     const image = await images.find({})
     res.status(200).json(image)
     console.log(image)
    }catch(error){
     console.log(error)
     res.status(500).json({message : error.message})
    }
 })


//app.use('/images', express.static('images'));


/*
// post method for 3product model
app.post('/product',async (req,res)=>{
   try{
    const products = await product.create(req.body)
    res.status(200).json(products)
    console.log(req.body)
   }catch(error){
    console.log(error)
    res.status(500).json({message : error.message})
   }
})

// get method for product model
app.get('/product',async (req,res)=>{
    try{
     const products = await product.find({})
     res.status(200).json(products)
     console.log(products)
    }catch(error){
     console.log(error)
     res.status(500).json({message : error.message})
    }
 })

// post method for detail model
 app.post('/detail',async(req,res)=>{
    try{
        const details = await detail.create(req.body)
        res.status(200).json(details)
        console.log(details)
    }catch(error){
        console.log(error)
        res.status(500).json({message: error.message})
    }
})

// get method for detail model
app.get('/detail',async(req,res)=>{
    try{
        const details = await detail.find({})
        res.status(200).json(details)
        console.log(details)
    }catch(error){
        console.log(error)
        res.status(500).json({message: error.message})
    }
})

// put method for detail model 
app.put('/detail/:id', async(req,res)=>{
    try{
        const{ id } = req.params
        const detailS = await detail.findByIdAndUpdate(id, req.body)
        if(!detailS){
            return res.status(404).json({message: `cannot find this product in db for this ${id}`})
        }
        const updatedproducts = await detail.findById(id)
        res.status (200).json(updatedproducts)
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete method for detail model 
app.delete('/detail/:id', async(req,res)=>{
    try{
        const{ id } = req.params
        const detailS = await detail.findByIdAndDelete(id)
        if(!detailS){
            return res.status(404).json({message: `cannot find this product in db for this ${id}`})
        }
       
        res.status(200).json(detailS)
    }catch(error){
        res.status(500).json({message:error.message})
    }
})
//GetBy id method for detail model
app.get('/detail/:id', async(req,res)=>{
    try{
        const{ id } = req.params
        const detailS = await detail.findById(id)
        if(!detailS){
            return res.status(404).json({message: `cannot find this product in db for this ${id}`})
        }
       
        res.status(200).json(detailS)
    }catch(error){
        res.status(500).json({message:error.message})
    }
})
*/

// Image post and get method
app.post('/detail',async(req,res)=>{
    try{
        const details = await detail.create(req.body)
        res.status(200).json(details)
        console.log(details)
    }catch(error){
        console.log(error)
        res.status(500).json({message: error.message})
    }
})


app.get('/detail',async(req,res)=>{
    try{
        const details = await detail.find({})
        res.status(200).json(details)
        console.log(details)
    }catch(error){
        console.log(error)
        res.status(500).json({message: error.message})
    }
})

mongo.connect(process.env.mongourl) //drivers
.then(()=>{ // its like a try fun in java (if function)
    app.listen(process.env.mongo_port,()=>{
        console.log('server is running on 3000')
    })
    console.log("mongodb and node is connected") // printed
}).catch((error)=>{    // else function
    console.log(error)  
})
