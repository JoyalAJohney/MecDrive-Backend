const mongoose = require("mongoose");
const schema = mongoose.Schema();

const DriverSchema = new schema({
    name : {
        type : String,
        required : true
    },
    branch : {
        type : String,
        required : true
    },
    year : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
});

// creating a collection for driver documents
const Driver = mongoose.model("driver",DriverSchema);
module.exports = Driver;