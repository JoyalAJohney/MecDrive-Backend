const express = require("express");
const router = express.Router();
const User = require("../models/users");
const mongo = require("mongodb");

// GET request
router.get("/", (req,res) => {
    User.find({}).then((user) => {
        res.send(user);
    });
});

// GET request to get all the accepted rides of a particular user
router.get("/:id",(req,res) => {
    User.findById(req.params.id).then(user => {
        if(!user)
            return res.status(404).end();
        res.json(user.acceptedRides).status(200);
    });
});

// POST request
router.post("/", (req,res) => {
    User.create(req.body).then((user) => {
        res.send(user);
    }).catch((err) => console.log(err));
});


// DELETE user -- ADMIN only !!!!
router.delete("/:id",(req,res) => {
    var id = req.params.id;
    User.deleteOne({ _id: mongo.ObjectID(id) },(err,results) => {
        res.send(results.result);
    })
});

module.exports = router;

