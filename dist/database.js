"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const types_1 = require("sequelize/types");
exports.db = new types_1.Sequelize('railway', 'root', 'KvjFWYlmAzRyqcYOL3Q1', {
    host: 'containers-us-west-81.railway.app',
    port: 7890,
    dialect: 'mysql'
});
exports.default = exports.db;
