"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("sequelize/types");
const database_1 = __importDefault(require("../database"));
const Employees = database_1.default.define('employees', {
    name: {
        type: types_1.DataTypes.STRING
    },
    age: {
        type: types_1.DataTypes.STRING
    },
    country: {
        type: types_1.DataTypes.BOOLEAN
    },
    possition: {
        type: types_1.DataTypes.STRING
    },
    wage: {
        type: types_1.DataTypes.STRING
    },
    id: {
        type: types_1.DataTypes.STRING
    },
});
exports.default = Employees;
