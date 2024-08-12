const mongoose = require('mongoose')

const collegeschema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    // teachers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' }]
    teachers:[{
        type: mongoose.Types.ObjectId,
        ref:'Teacher'
    }],
},
{
    timestamps:true
}
)
const College = mongoose.model('College',collegeschema)
module.exports = College