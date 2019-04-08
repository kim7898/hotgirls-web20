    
const express = require('express')
const Router = express.Router;
const commentApiRouter = Router();
const commentModel = require("../model/commentModel")

commentApiRouter.post("/", (req, res) => {
    let {comment} = req.body;
    commentModel.create(
        {comment},
        (err, createdComment) => {
            if(err) console.log(err)
            else res.send({success: 1, data: createdComment});
        }
    )
})

commentApiRouter.get("/", (req, res) => {
    commentModel.find((err, comments) => {
        if(err) console.log(err)
        else res.send({success: 1, data: comments})
    })
})

commentApiRouter.get("/:id", (req, res) => {
    commentModel.find(
        {_id: req.params.id},
        (err, foundCmt) => {
            if(err) console.log(err)
            else res.send({success: 1, data: foundCmt})
        }
    )
})

commentApiRouter.put("/:id", (req, res) => {
    commentModel.findOneAndUpdate(
        {_id: req.params.id},
        {
            $set: {comment: req.body.comment}
        },
        (err, changedCmt) => {
            if(err) console.log(err)
            else res.send({success: 1, data: changedCmt})
        }
    )
})

commentApiRouter.delete("/:id", (req, res) => {
    commentModel.findOneAndDelete(
        {_id: req.params.id},
        (err) => {
            if(err) console.log(err)
            else console.log({success: 1})
        }
    )
})

module.exports = commentApiRouter;