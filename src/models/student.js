const DataTypes = require('sequelize');
const { sequelize } = require('../config/db');

const Student = sequelize.define('Student', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    gender:{
        type: DataTypes.ENUM('Male','Female','Other'),
        allowNull:false
    },
    streetAddress:{
        type: DataTypes.STRING(255),
        allowNull:false
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    birthdate:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    speciality:{
        type: DataTypes.STRING(100),
        allowNull:false,
    },
    dni:{
        type: DataTypes.BIGINT,
        allowNull:false,
    }
}, {
    timestamps: false
});

module.exports = Student;