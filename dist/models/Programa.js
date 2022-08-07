"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("sequelize/types");
const database_1 = __importDefault(require("../database"));
const Programa = database_1.default.define("programa", {
    id: {
        type: types_1.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: types_1.DataTypes.STRING,
        required: true,
        lowercase: true,
    },
}, {
    timestamp: true,
});
exports.default = Programa;
