
const asyncHandler = require("express-async-handler")
const product = require('../models/productmodel')  // Calling ProductModel



const createproduct = async (req,res)=>{
    try{
        const {name,phone,age,gender,aadhar,blood} = (req.body)

        if(!name || !blood){
            res.status(400)
            throw new Error('Invalid data')
           
        }
     const products = await product.create({name,phone,age,aadhar,blood})
     res.status(200).json(products)
     console.log(req.body)
    }catch(error){
     console.log(error)
     res.status(500).json({message : error.message})
    }
 }

 const getproduct = async (req,res)=>{
    try{
       
     const products = await product.find()
     res.status(200).json(products)
     console.log(products)
    }catch(error){
        res.status(500)
       // throw new Error(error.message)
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

const getbyidproduct =  asyncHandler(async(req,res,next)=>{
    try{
        const{ id } = req.params
       const products = await product.findById({}).select('age')
       res.status(200).json(products)
    }catch(error){
        res.status(500)
        throw new Error(error.message)
       // res.status(500).json({message:error.message})
    }
})

// const getbyidproduct = asyncHandler(async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const product = await product.findById(id);

//         if (!product) {
//             res.status(404);
//             throw new Error('Product not found');
//         }

//         res.status(200).json(product);
//     } catch (error) {
//         next(error); // Pass the error to the error handling middleware
//     }
// });

module.exports = {
    createproduct,
    getproduct,
    updatedproduct,
    deleteproduct,
    getbyidproduct
}