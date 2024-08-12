const bcrypt = require('bcrypt');   
const jwt = require('jsonwebtoken');
const user = require('../models/usermodel');  // Imported JWT

// Post method for creating a user
const createuser = async (req, res) => {
    try {
        const { Username, Email, Password, confirmPassword } = req.body;

        // Validate that all required fields are provided
        if (!Username || !Email || !Password || !confirmPassword) {
            return res.status(400).json({ message: 'Username, Email, Password, and confirmPassword are required' });
        }

        // Check if Password and confirmPassword match
        if (Password !== confirmPassword) {
            return res.status(400).json({ message: 'Password and confirmPassword do not match' });
        }
        
        // Create a hash for the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(Password, salt);

        // Create a new user entry in the database
        const newUser = await user.create({
            Username,
            Email,
            Password: hashedPassword,
            confirmPassword
        });

        const token = jwt.sign(
            {
                id: newUser._id, 
                Email: newUser.Email
            },
            'mytoken',
            { expiresIn: '2h' }
        );

        res.status(200).json({ newUser, token });
        console.log(newUser, token);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// Creating a New User Login
const login = async (req, res) => {
    try {
        const { Email, Password } = req.body;
        
        if (!Email || !Password) {
            return res.status(400).json({ message: 'Email and Password are required' });
        }

        const existinguser = await user.findOne({ Email });
        if (!existinguser) {
            return res.status(400).json({ message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(Password, existinguser.Password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid Password' });
        }

        const token = jwt.sign(
            {
                id: existinguser._id,    // Unique id 
                Email: existinguser.Email  // My Email
            },
            'mytoken',
            { expiresIn: '2h' }
        );

        res.status(200).json({ existinguser, token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// Creating a Authentication Token to Aceess (login)
const authenticatetoken = (req,res,next)=>{
    const token = req.header('Authorization')?.split(' ')[1]
    if(!token){
        return res.status(404).json({message: 'Access Denied'})
    }
    try{
        const verified = jwt.verify(token, 'mytoken')
        req.user = verified
        next()
    }catch(error){
        res.status(500).json({message: 'Invalid Token'})
    }
}

module.exports = {
    createuser,
    login,
    authenticatetoken
};
