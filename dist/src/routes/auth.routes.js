"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthController_1 = require("../controllers/AuthController");
const verifyToken_1 = require("../utils/verifyToken");
const router = (0, express_1.Router)()
    .post('/singup', AuthController_1.singup)
    .post('/singin', AuthController_1.singin)
    //Ruta Protegida
    .get('/profile', verifyToken_1.TokenValidation, AuthController_1.profile);
exports.default = router;
