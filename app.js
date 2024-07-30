const express = require('express') // imported express 
const mongo = require('mongoose')  // created and imported mongo
const student = require('./models/studentmodel')  // declared and calling studentmodel
const studentroute = require('./routes/studentroute')
const detailroute = require('./routes/detailroute')
const productroute = require('./routes/productroute')
const app = express() 



app.use (express.json())  // for using json file

app.use('/api/student' , studentroute)  // calling studentroute
app.use('/api/detail' , detailroute)  // calling detailroute
app.use('/api/product',productroute)



mongo.connect('mongodb+srv://test:test@cluster0.wzjxdpy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0') // mongo driver
.then(()=>{
    app.listen(3000,()=>{
        console.log('Server is running on 3000 App.js')
    })
    console.log('mongodb and nodejs is connected')
}).catch((error)=>{
    console.log(error)
})



