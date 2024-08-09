const mongoose = require('mongoose')

const productScheme = mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    
    phone:{
        type: Number,
        required:false,
    },
    age:{
        type:Number,
        required:false,
    },
    gender:{
        type:String,
        required: false,
    },
    blood:{
        type :String,
        required:true,
    }, 
    aadhar :{
        type : Number,
        required : false,
    }


},
{
    timestamps: true,
}
)

const productmodel = mongoose.model('productmodel', productScheme)

module.exports = productmodel

