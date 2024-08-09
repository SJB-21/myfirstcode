const mongoose = require('mongoose') // imported mongoose

const studentschema = mongoose.Schema({   // creating schema for student model

//     name:{
//         type:String,
//         required:true,
//     },
//     rollno:{
//         type:String,
//         required:true,
//     },
//     tam:{
//         type:Number,
//         required:false,
//     },
//     eng:{
//         type:Number,
//         required:false,
//     },
//     mat:{
//         type:Number,
//         required:false,
//     },
//     aadhar:{
//         type:Number,
//         required:true,
//     },
//     pan:{
//         type:String,
//         required:true,
//     },
// },
    jobid:{
        type:String,
        require : true,
    },
    jobname:{
        type:String,
        required: true,
    },
},
    {
        timestamps:true
    },
)

const studentmodel = mongoose.model('studentmodel', studentschema)

module.exports = studentmodel