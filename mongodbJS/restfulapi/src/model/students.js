const mongoose = require('mongoose');
const validator = require('validator')

//create the schema for the student 
const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: 3
        },
        email: {
            type: String,
            required: true,
            unique: [true, 'Email id is present'],
            validator(value) {
                if (!validator.isEmail(value)) {
                    throw new Error('Invalid Email');
                }
            }
        },
        phone: {
            type: Number,
            min: 10,
            // max: 12,
            required: true,
            unique: true
        },
        address: {
            type: String,
            required: true
        }
    }
);

// we will create a new Model i.e called the collection
const Student = new mongoose.model('Student',studentSchema);
module.exports = Student;
