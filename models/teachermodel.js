const mongoose = require('mongoose');

const teacherSchema = mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true
    }
},
{
    timestamps:true,
}
)
const Teacher = mongoose.model('Teacher',teacherSchema)
module.exports = Teacher