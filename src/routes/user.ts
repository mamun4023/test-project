import { Router } from "express";

const router = Router();
const controller = require("../controllers/user");

router.post("/sign-up", controller.signUp);
router.post("/sign-in", controller.signIn);


module.exports = router;
