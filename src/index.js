const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { sequelize, connectDB } = require('./config/db');

// 404 at first bc i dont have an API set yet
dotenv.config();
const app = express();
const PORT = 8080;
app.use(cors()); 
app.use(express.json());

connectDB();

const studentRoutes = require('./routes/studentRoute');
app.use('/api/v1/student', studentRoutes);

sequelize.sync().then(() => {
    console.log('Database connected:)');
    app.listen(PORT, () => console.log(`Deployed in http://localhost:${PORT}`));
})
.catch((err) => console.error('Connection to database threw an Error: ' + err));
