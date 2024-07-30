const mongoose = require('mongoose')

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
    /*  description: {
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
      phone:{
        type:Number,
        required:false,
      },
      email:{
        type:String,
        required:true,
      }
     
},
    {
        timestamps:true
    },
    {
    shopname :{
      type:String,
      required:true,
    },
    pname:{
      type:String,
      required:true,
    },
    quantity:{
      type:Number,
      required:true,
    },
    price:{
      type:Number,
      required:true,
    }
    }
)

   name:{
      type : String,
      required: true
   },
   image:{
    type:String,
    required:false
   }
    */

  }
)

const detailmodel = mongoose.model('detailmodel',detailSchema)


module.exports = detailmodel
