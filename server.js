const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user_api");
const driverRouter = require("./routes/user_api");
const app = express();

// Connection to mongodb
mongoose.connect("mongodb://localhost/mecDrive", {useNewUrlParser : true});

// Middleware to handle body parser
app.use(bodyParser.json());

// Middleware to handle User request
app.use('/api/user', userRoutes);
// Middleware to handle driver request
app.use('/api/driver', driverRoutes);


// port
app.listen(8000,() => { 
    console.log("Server running in port 8000");
});