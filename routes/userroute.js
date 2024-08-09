const express = require('express')
const user = require('../models/usermodel')
const userroute = express.Router()


const {createuser,login} = require('../controllers/usercontroller')

userroute.post('/create',createuser)
userroute.post('/login', login)



module.exports = userroute