const teacher = require('../models/teachermodel');

const createteacher = async (req, res) => {
    try {
        const { name, role } = req.body;
        if (!name || !role) {
            return res.status(400).json({ message: "Name and Role are required" });
        }
        const teachers = await teacher.create(req.body);
        res.status(200).json(teachers);
        console.log(req.body);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getteacher = async (req, res) => {
    try {
        const teachers = await teacher.find({}).select('role');;
        res.status(200).json(teachers);
        console.log(teachers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = { createteacher, getteacher };
