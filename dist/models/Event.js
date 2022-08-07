"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database"));
exports.Event = database_1.default.define("event", {
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
}, {
    timestamp: true,
});
