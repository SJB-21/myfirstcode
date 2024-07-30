const express = require('express');
const detail = require('../models/detailmodel')
const detailroute = express.Router()


const { createdetail,
    getdetail,
    updatedetail,
    deletedetail,
    getbyiddetail

} = require('../controllers/detailcontroller')

detailroute.post('/',createdetail)
detailroute.get('/',getdetail)
detailroute.put('/:id',updatedetail)
detailroute.delete('/:id',deletedetail)
detailroute.get('/:id',getbyiddetail)

module.exports = detailroute