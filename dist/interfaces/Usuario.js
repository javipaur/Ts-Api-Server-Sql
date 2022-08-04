"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database"));
const Employees = database_1.default.define('employees', {
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    age: {
        type: sequelize_1.DataTypes.INTEGER
    },
    country: {
        type: sequelize_1.DataTypes.STRING
    },
    position: {
        type: sequelize_1.DataTypes.INTEGER
    },
    wage: {
        type: sequelize_1.DataTypes.INTEGER
    },
    id: {
        type: sequelize_1.DataTypes.INTEGER
    },
});
exports.default = Usuario;
