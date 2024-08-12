const college = require('../models/collegemodel')
const teacher = require('../models/teachermodel')
const createcollege = async(req,res)=>{
    try{
    const {name,address,teachers} = req.body
    if(!name || !address){
        return res.status(404).json({message: "Name and Address is required"})
    }
    const teacherIds = teachers.map(id => mongoose.Types.ObjectId(id));
    console.log("Teachers id",teacherIds)

    const colleges = await college.create({name,address,teachers})
    res.status(200).json(colleges)
    console.log(req.body)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

const getcollege  = async(req,res)=>{
    try{
        const colleges = await college.find().populate('teachers')
        res.status(200).json(colleges)
        console.log(colleges)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

module.exports = {createcollege, getcollege}
    