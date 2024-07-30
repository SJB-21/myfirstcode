const express = require('express');
const product = require('../models/productmodel')
const productroute = express.Router()


const { createproduct,
    getproduct,
    updatedproduct,
    deleteproduct,
    getbyidproduct

} = require('../controllers/productcontroller')

productroute.post('/',createproduct)
productroute.get('/',getproduct)
productroute.put('/:id',updatedproduct)
productroute.delete('/:id',deleteproduct)
productroute.get('/:id',getbyidproduct)

module.exports = productroute