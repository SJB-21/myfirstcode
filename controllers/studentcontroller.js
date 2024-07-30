//const express = require('express')
//const controller = express()

const student = require('../models/studentmodel')

//post method
const createstudent = async(req,res)=>{
    try{
        const students = await student.create(req.body)
        res.status(200).json(students)
        console.log(req.body)
    }catch(error){
        console.log(error)
        res.status(500).json({message: error.message})
    }
}

// get method
const getstudent = async(req,res)=>{
    try{
        const students = await student.find({})
        res.status(200).json(students)
        console.log(students)
    }catch(error){
        console.log(error)
        res.status(500).json({message: error.message})
    }
}

// put method
const updatestudent = async(req,res)=>{
    try{
        const { id } = req.params
        const students = await student.findByIdAndUpdate(id, req.body)
        if(!students){
            return res.status(404).json({message: `cannot find this product in database for this ${id}`})
         }
        const updatedproducts = await student.findById(id)
        res.status(200).json(updatedproducts)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

// delete method
const deletestudent = async(req,res)=>{
    try{
        const { id } = req.params
        const students = await student.findByIdAndDelete(id, req.body)
        if(!students){
            return res.status(404).json({message: `cannot find this product in database for this ${id}`})
        }
        const updatedproducts = await student.findById(id)
        res.status(200).json(updatedproducts)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

//getbyid
const getbyidstudent = async(req,res)=>{
    try{
        const { id } = req.params
        const students = await student.findById(id)
        if(!students){
            return res.status(404).json({message: `cannot find this product in database for this ${id}`})
        }
        const updatedproducts = await student.findById(id)
        res.status(200).json(updatedproducts)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    createstudent,
    getstudent,
    updatestudent,
    deletestudent,
    getbyidstudent

    
}