import {createPool} from'mysql2/promise';

import {} from '../database';
export async function connect(){
        const db = await createPool({
            user: "root",
            host: "containers-us-west-81.railway.app",
            password: "KvjFWYlmAzRyqcYOL3Q1",
            port:7890,
            database: "railway",
            connectionLimit:10
            });

    return db;
    
}