const Student = require('../models/student');

async function validateStudent(req, res, next) {
    const { name, gender, streetAddress, age, birthdate, speciality, dni } = req.body;
    if (!name || !gender || !streetAddress || !age || !birthdate || !speciality || !dni) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    if (age > 17) {
        return res.status(418).json({ message: "Student must be a minor!" });
    }
    if(gender !== 'Female' && gender !== 'Male' && gender !== 'Other'){
        return res.status(418).json({ message: 'Enter a valid gender!'}); 
    }
    const same_dni = await Student.findOne({ where: { dni: dni } });
    if(same_dni){
        return res.status(418).json({ message: "DNI already exists!" });
    }
    const eq_streetAddress = await Student.findOne({ where: { streetAddress: streetAddress } });
    if(eq_streetAddress){
        return res.status(418).json({ message: "Address already exists!" });
    }
    next();
}

module.exports = validateStudent;
