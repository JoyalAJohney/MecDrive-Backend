const express = require("express");
const router = express.Router();
const Driver = require("../models/drivers");

// GET request
router.get("/users", (req,res) => {
    Driver.find({}).then((driver) => {
        res.send(driver);
    });
});

// POST request
router.get("/users", (req,res) => {
    Driver.create(req.body).then((driver) => {
        res.send(driver);
    });
});

