import { Router } from "express";
const router = Router();
const userRoutes = require("./user");
const analyzerRoutes = require("./analyzer");

router.use("/user", userRoutes);
router.use("/analyzer", analyzerRoutes);

module.exports = router;
