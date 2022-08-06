"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthController_1 = require("../controllers/AuthController");
const verifyToken_1 = require("../utils/verifyToken");
const router = (0, express_1.Router)();
router.post('/singup', AuthController_1.singup);
router.post('/singin', AuthController_1.singin);
//Ruta protegida
router.get('/profile', verifyToken_1.TokenValidation, AuthController_1.profile);
exports.default = router;
