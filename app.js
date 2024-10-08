const express = require('express') // imported express 
const mongo = require('mongoose')  // created and imported mongo
const cron = require ('node-cron')  // Imported cron 
const student = require('./models/studentmodel')  // declared and calling studentmodel
const studentroute = require('./routes/studentroute')
const detailroute = require('./routes/detailroute')
const productroute = require('./routes/productroute')
const userroute = require('./routes/userroute')
const loginroute = require('./routes/loginroute')
const user = require('./models/usermodel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken') 


// const errorhandling = require('./middleware/errorhandler')
// const errorMiddleware = require('./middleware/errorhandler')

const cors = require('cors')   // Imported Cors 


const app = express() 

app.use (express.json())  // for using json file
   

const corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions))  // Calling coreOptions  


app.use('/api/student' , studentroute)  // calling studentroute
app.use('/api/ ' , detailroute)  // calling detailroute
app.use('/api/product',productroute)
app.use('/api/user',userroute)
//app.use('/api/login',loginroute)


// Cron scheduling task eg..
cron.schedule('58 16 * * *', async () => { // It will be run at every minute
    try {
      const studentId = '66b2478f726a19670c31d960';
      const student1 = await student.findById(studentId);
      console.log('Scheduled Task - Student:', student1);
    } catch (error) {
      console.error('Error in cron:', error);
    }
  });




mongo.connect('mongodb+srv://test:test@cluster0.wzjxdpy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0') // mongo driver
.then(()=>{
    app.listen(4000,()=>{
        console.log('Server is running on 4000 App.js')
    })
    console.log('mongodb and nodejs is connected')
}).catch((error)=>{

    console.log(error)
})



