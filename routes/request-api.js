const express = require("express");
const router = express.Router();
const Request = require("../models/requests");
const User = require("../models/users");


// POST request(from Users) - adds the requests from users to Request collection
router.post("/", (req,res) => {
    Request.create(req.body).then((request) => {
        res.send(request);
        console.log("Succesfully added request", req.body);
    });
});

// GET request(to Drivers) - sends all request to drivers
router.get("/", (req,res) => {
    Request.find({}).then((request) => {
        res.send(request);
    });
});


// PUT request - accepted driver requests are added to "acceptedRides" field in User collection
router.put("/:id", (req,res) => {
    User.updateOne({_id:req.params.id}, {$push: {"acceptedRides":req.body}})
    .then((ride) => {
        res.send(ride)
    }).catch((err) => console.log(err));
});

module.exports = router;