const mongoose = require('mongoose')
const { Schema } = mongoose; 
const customer = require('../models/customermodel')
const detailSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
      },
      rollno:{
        type: String,
        required:true,
        unique: true,
      },
      category: {
        type: String,
        require:true
      },
      description: {
        type: String,
        required:false
      },
      quantity: {
        type: Number,
        required:true,
        
      },
      price: {
        type: Number,
        required: true,
        
      },
      customer: {
       type: Schema.Types.ObjectId,
        ref: 'customermodel',            
        required: true,
      },
     
},
    {
        timestamps:true
    },
 
)

//    name:{
//       type : String,
//       required: true

//    },
//    image:{
//     type:String,
//     required:false
//    }
    

//   }
// )

const detailmodel = mongoose.model('detailmodel',detailSchema)


module.exports = detailmodel
