const express = require("express");
const app = express();

// Middleware
app.use('/api', routes);


// port
app.listen(8000,() => {
    console.log("Server running in port 8000");
});