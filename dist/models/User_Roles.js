"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("sequelize/types");
const database_1 = __importDefault(require("../database"));
const Role_1 = require("./Role");
const User_1 = __importDefault(require("./User"));
const User_Roles = database_1.default.define('User_Roles', {
    selfGranted: types_1.DataTypes.BOOLEAN
}, { timestamps: true });
User_1.default.belongsToMany(Role_1.Role, { through: User_Roles });
Role_1.Role.belongsToMany(User_1.default, { through: User_Roles });
