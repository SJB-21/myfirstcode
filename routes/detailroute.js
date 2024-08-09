const express = require('express');
const detail = require('../models/detailmodel')
const detailroute = express.Router()


const { createdetail,
    getdetail,
    updatedetail,
    deletedetail,
    getbyiddetail,
    customerdetail

} = require('../controllers/detailcontroller')

detailroute.post('/',createdetail)
detailroute.get('/',getdetail)
detailroute.put('/:id',updatedetail)
detailroute.delete('/:id',deletedetail)
detailroute.get('/:id',getbyiddetail)
detailroute.get('/',customerdetail)

module.exports = detailroute