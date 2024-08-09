const mongoose = require('mongoose')

const customerSchema = mongoose.Schema({

    id:{
        type:String,
        required: false,
    },
    name:{
        type:String,
        require:false,
    },
    address:{
        type:String,
        require:false,
    },
    phone:{
        type:Number,
        require:false,
    },
    email:{
        type:String,
        require : false,
    }
},
{
    timestamps:true
},

)
    
const customermodel = mongoose.model('customermodel',customerSchema)


module.exports = customermodel