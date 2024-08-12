  const express = require ('express')
  const collegeroute = express.Router()
 
  const {createcollege,getcollege} = require('../controllers/collegecontroller')

  collegeroute.post('/',createcollege)
  collegeroute.get('/',getcollege)

  module.exports = collegeroute