const express = require("express");
const Router = express.Router;
const userApiRouter = Router();
const userModel = require("../model/userModel");

userApiRouter.post("/", (req, res) => {
    const {account, password, name, location, gender, dob} = req.body;
    userModel.create(
        {account, password, name, location, gender, dob},
        (err, createdUser) => {
            if(err) console.log(err);
            else res.send({success: 1, data: createdUser});
        }
    )
})

userApiRouter.get("/", (req, res) => {
    userModel.find((err, users) => {
        if(err) console.log(err);
        else res.send({success: 1, data: users});
    })
})

userApiRouter.get("/:id", (req, res) => {
    userModel.find({_id: req.body.id}, (err, foundUser) => {
        if(err) console.log(err)
        else res.send({success: 1, data: foundUser})
    })
})

userApiRouter.put("/:id", (req, res) => {
    userModel.findOneAndUpdate(
        {_id: req.params.id},
        {
            $set:{
                account:req.body.account,
                password: req.body.password,
                name: req.body.name,
                location: req.body.location,
                gender: req.body.gender,
                dob: req.body.dob
            }
        }, (err, changedUser) => {
            if(err) console.log(err);
            else res.send({success: 1, data: changedUser})
        })
})

userApiRouter.delete("/:id", (req, res) => {
    userModel.findOneAndDelete(req.body.id, (err) => {
        if(err) console.log(err)
        else res.send({success: 1})
    });
})

module.exports = userApiRouter;