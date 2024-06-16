const express = require('express');
const router = express.Router();
const Student = require('../models/student');
const validateStudent = require('../middleware/validateStudent');

router.post( '/new', validateStudent, (req,res) =>{
    const { name, gender, streetAddress, age, birthdate, speciality ,dni} = req.body;
    const newStudent = {
        name,
        gender,
        streetAddress,
        age,
        birthdate,
        speciality,
        dni
    };
    Student.create(newStudent).then(() => {
        res.status(200).json({
            message: `${name} has been added!`
        });
    }).catch((err) => {
        console.error('Error adding student:', err);
        res.status(418).json({message: "Student could not be added!: ", err});
    });
});

module.exports = router;