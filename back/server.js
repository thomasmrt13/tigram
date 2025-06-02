const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();
const port = 5000;

connectDB(); // Connect to MongoDB

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", require('./routes/user.routes'));


// Lauch the server
app.listen(port, () => console.log(`Server is running on port ${port}`));