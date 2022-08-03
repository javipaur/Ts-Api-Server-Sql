import {createPool} from'mysql2/promise';

export async function connect(){
        const connection = await createPool({
            user: "root",
            host: "containers-us-west-81.railway.app",
            password: "KvjFWYlmAzRyqcYOL3Q1",
            port:7890,
            database: "railway",
            connectionLimit:10
            });

    return connection;
    
}