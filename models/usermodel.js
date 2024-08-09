const mongoose = require('mongoose');
const userschema = mongoose.Schema({

    Username:{
        type:String,
        required: true,
    },
    Password:{
        type:String,
        require:true,
        validate: {
            validator: function(value) {
              // Check if password meets the criteria
              const minLengthRegex = /^.{8,}$/;
              const lowerCaseRegex = /[a-z]/;
              const upperCaseRegex = /[A-Z]/;
              const digitOrSpecialRegex = /[\d\W]/;  
      
              // Create a validation object
              const validationResults = {
                minLength: minLengthRegex.test(value),
                lowerCase: lowerCaseRegex.test(value),
                upperCase: upperCaseRegex.test(value),
                digitOrSpecial: digitOrSpecialRegex.test(value),
              };
      
              // Check each condition and return appropriate message
              if (!validationResults.minLength) {
                this.invalidate('Password', 'Password must be at least 8 characters long.');
                return false;
              }
              if (!validationResults.lowerCase) {
                this.invalidate('Password', 'Password must include at least one lowercase letter.');
                return false;
              }
              if (!validationResults.upperCase) {
                this.invalidate('Password', 'Password must include at least one uppercase letter.');
                return false;
              }
              if (!validationResults.digitOrSpecial) {
                this.invalidate('Password', 'Password must include at least one digit or special character.');
                return false;
              }
      
              // If all conditions are met
              return true;
            }
          },

        

    },
    Email: {
        type: String,
        require: true, // Custom message for required validation
        unique: true, // u can use the email only one time if in case you mentioned a same email it throws an error [dup key]
        trim: true,
        minlength: [1, 'Email cannot be empty'], // Ensure email is not empty
        maxlength: [50, 'Email must be less than 50 characters'], // Adjust maxlength as needed
        validate: {
            validator: function(value) {
                // Basic email validation
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: 'Invalid email format'
        }
      }
},
    {
        timestamps:true
    }
)

const usermodel = mongoose.model('usermodel', userschema)
module.exports = usermodel