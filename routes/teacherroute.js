const express = require('express');
const teacherroute = express.Router();

// Import functions from the correct controller file
const { createteacher, getteacher } = require('../controllers/teachercontroller');

teacherroute.post('/', createteacher);
teacherroute.get('/', getteacher);

module.exports = teacherroute;
