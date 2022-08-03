"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario = db.define('Usuario', {
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
});
exports.default = Usuario;
