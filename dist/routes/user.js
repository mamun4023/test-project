"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const controller = require('../controllers/user');
router.post('sign-up', controller.signUp);
router.post('sign-in', controller.signIn);
module.exports = router;
