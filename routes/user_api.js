const express = require("express");
const router = express.Router();
const User = require("../models/users");

// GET request
router.get("/users", (req,res) => {
    User.find({}).then((user) => {
        res.send(user);
    });
});

// POST request
router.get("/users", (req,res) => {
    User.create(req.body).then((user) => {
        res.send(user);
    });
});

