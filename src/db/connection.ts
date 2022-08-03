import {createPool} from'mysql2/promise';
import { Sequelize } from 'sequelize';

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


const db = new Sequelize(
    'railway',
    'root',
    'KvjFWYlmAzRyqcYOL3Q1',
    {
    host:'containers-us-west-81.railway.app',
    port:7890,
    dialect:'mysql'   
});

export default db;