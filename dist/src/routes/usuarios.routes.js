"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_controller_1 = require("../controllers/usuarios.controller");
const router = (0, express_1.Router)()
    .get('/', usuarios_controller_1.getUsuarios)
    .post('/crearUsuario', usuarios_controller_1.createUsuarios);
exports.default = router;
