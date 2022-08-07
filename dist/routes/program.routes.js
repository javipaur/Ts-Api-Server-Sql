"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProgramController_1 = require("../controllers/ProgramController");
const router = (0, express_1.Router)()
    .get('/', ProgramController_1.programWelcome);
exports.default = router;
