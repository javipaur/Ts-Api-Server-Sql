"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const sequelize_1 = require("sequelize");
const User = database_1.default.define("users", {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        required: true,
        lowercase: true,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        required: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        required: true,
    },
}, {
    timestamp: false,
});
exports.default = User;
