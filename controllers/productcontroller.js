const product = require('../models/productmodel')  // Calling ProductModel


const createproduct = async (req,res)=>{
    try{
     const products = await product.create(req.body)
     res.status(200).json(products)
     console.log(req.body)
    }catch(error){
     console.log(error)
     res.status(500).json({message : error.message})
    }
 }

 const getproduct = async (req,res)=>{
    try{
     const products = await product.find({})
     res.status(200).json(products)
     console.log(products)
    }catch(error){
     console.log(error)
     res.status(500).json({message : error.message})
    }
 }

 const updatedproduct =  async(req,res)=>{
    try{
        const{ id } = req.params
        const products = await product.findByIdAndUpdate(id, req.body)
        if(!products){
            return res.status(404).json({message: `cannot find this product in db for this ${id}`})
        }
        const updatedproducts = await product.findById(id)
        res.status (200).json(updatedproducts)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

const deleteproduct = async(req,res)=>{
    try{
        const{ id } = req.params
        const products = await product.findByIdAndDelete(id)
        if(!products){
            return res.status(404).json({message: `cannot find this product in db for this ${id}`})
        }
       
        res.status(200).json(products)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

const getbyidproduct =  async(req,res)=>{
    try{
        const{ id } = req.params
        const products = await product.findById(id)
        if(!products){
            return res.status(404).json({message: `cannot find this product in db for this ${id}`})
        }
       
        res.status(200).json(products)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

module.exports = {
    createproduct,
    getproduct,
    updatedproduct,
    deleteproduct,
    getbyidproduct
}