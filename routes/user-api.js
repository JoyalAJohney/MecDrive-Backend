const express = require("express");
const router = express.Router();
const User = require("../models/users");

// GET request
router.get("/", (req,res) => {
    User.find({}).then((user) => {
        res.send(user);
    });
});

// POST request
router.post("/", (req,res) => {
    User.create(req.body).then((user) => {
        res.send(user);
    }).catch((err) => console.log(err));
});


module.exports = router;

