const express = require('express')
const products = express.Router()
products.get('/clothes',(req,res)=>{
    res.send("this is shirt,this is pant")
})
products.get('/pant',(req,res)=>{
    res.send("this is pant")
})

module.exports = products; 




