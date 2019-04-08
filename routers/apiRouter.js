const express = require("express")
const Router = express.Router;
const apiRouter = Router();
const imagesApiRouter=require("./imagesApiRouter")
apiRouter.get("/", (req,res)=>{
    res.send("hello");
});
apiRouter.use("/images",imagesApiRouter);

module.exports=apiRouter;