const detail = require('../models/detailmodel')

// post method
const createdetail = async(req,res)=>{
    try{
        const details = await detail.create(req.body)
        res.status(200).json(details)
        console.log(details)
    }catch(error){
        console.log(error)
        res.status(500).json({message: error.message})
    }
}

//get method
const getdetail = async(req,res)=>{
    try{
        const details = await detail.find({})
        res.status(200).json(details)
        console.log(details)
    }catch(error){
        console.log(error)
        res.status(500).json({message: error.message})
    }
}

//put method
const updatedetail = async(req,res)=>{
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
}

//delete method 
const deletedetail = async(req,res)=>{
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
}

//GetById method
const getbyiddetail = async(req,res)=>{
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
}




module.exports =  {createdetail,
    getdetail,
    updatedetail,
    deletedetail,
    getbyiddetail
}