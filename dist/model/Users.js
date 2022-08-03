"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("sequelize/types");
const database_1 = __importDefault(require("../database"));
const Usuario = database_1.default.define('Usuario', {
    nombre: {
        type: types_1.DataTypes.STRING
    },
    email: {
        type: types_1.DataTypes.STRING
    },
    tipo: {
        type: types_1.DataTypes.BOOLEAN
    },
});
exports.default = Usuario;
