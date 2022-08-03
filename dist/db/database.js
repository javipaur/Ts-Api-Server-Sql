"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// export async function connect(){
//         const db = await createPool({
//             user: "root",
//             host: "containers-us-west-81.railway.app",
//             password: "KvjFWYlmAzRyqcYOL3Q1",
//             port:7890,
//             database: "railway",
//             connectionLimit:10
//             });
//     return db;
// }
const db = new sequelize_1.Sequelize('railway', 'root', 'KvjFWYlmAzRyqcYOL3Q1', {
    host: 'containers-us-west-81.railway.app',
    port: 7890,
    dialect: 'mysql'
});
exports.default = db;
