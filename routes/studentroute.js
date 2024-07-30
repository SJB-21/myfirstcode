const express = require('express')
const router = express.Router()
const student = require('../models/studentmodel')
const { createstudent,
     getstudent,
    updatestudent,
    deletestudent,
    getbyidstudent} = require('../controllers/studentcontroller')

router.post('/',createstudent)

router.get('/', getstudent)

router.put('/:id', updatestudent )

router.delete('/:id',deletestudent)

router.get('/:id',getbyidstudent)

module.exports = router