const mongoose = require("mongoose");
const schema = mongoose.Schema();

const RequestSchema = new schema({
    userId : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    time : {
        type : String,
        required : true
    }
});

// creating a collection for driver documents
const Request = mongoose.model("driver",RequestSchema);
module.exports = Request;