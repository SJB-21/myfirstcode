const mongoose = require('mongoose')

const productScheme = mongoose.Schema({
    firstname:{
        type: String,
        required:true,
    },
    lastname:{
        type : String,
        required:false,
    },
    phone:{
        type: Number,
        required:false,
    },
    age:{
        type:Number,
        required:true,
    },
    gender:{
        type:String,
        required: true,
    },
    blood_group:{
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

