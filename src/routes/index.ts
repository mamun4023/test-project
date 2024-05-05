import { Router } from "express";
const router = Router();
const isAuthencated = require('../middlewares/isAuthencated')
const userRoutes = require("./user");
const analyzerRoutes = require("./analyzer");


router.use("/user", userRoutes);
router.use("/analyzer", isAuthencated, analyzerRoutes);



router.post( "/test", (req, res)=>{
    res.status(200).json({
        message : "working"
    })
})

module.exports = router;
