const express = require("express");
const Router = express.Router;
const imagesApiRouter = Router();
const imageModel = require("../models/images")
// create
imagesApiRouter.post("/", (req,res)=>{
    const{link , title , author , description }= req.body;
    imageModel.create({link , title , author , description } ,  (err , imageScreated )=>{
        if (err) res.send({success:0 , err})
        else res.send({success:1 , data : imageScreated})
    })
})
// read 
imagesApiRouter.get("/", (req,res)=>{
    imageModel.find({}, (err, docs)=>{
        if(err) console.log(err)
        else res.send(docs);
    })
    
})
imagesApiRouter.get("/:id", (req,res)=>{
    imageModel.find({_id: id }, (err, docs)=>{
        if(err) console.log(err)
        else res.send(docs);
    })
    
})
// update
imagesApiRouter.put("/:id",(req,res)=>{
    
    ImageModel.findOneAndUpdate({_id:id},{},(err,data)=>{
        if(err) console.log(err)
        else console.log(data)
    })
})
    

// delete
imagesApiRouter.delete("/:id", (req, res) => {
    imageModel.findOneAndDelete(req.params.id, (err) => {
        if(err) console.log(err)
        else res.send({success: 1})
    })
})


module.exports=imagesApiRouter