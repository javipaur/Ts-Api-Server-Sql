"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthController_1 = require("../controllers/AuthController");
const router = (0, express_1.Router)();
router.post('/singup', AuthController_1.singup);
router.post('/singin', AuthController_1.singin);
router.get('/profile', AuthController_1.profile);
exports.default = router;
