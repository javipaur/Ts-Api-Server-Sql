
const { Sequelize } = require('sequelize');

//export async function connect(){
 const sequelize = new Sequelize(
    'railway', 
    'root', 
    'KvjFWYlmAzRyqcYOL3Q1', {
        host: 'containers-us-west-81.railway.app',
        port: 7890,
        dialect: 'mysql',
        // logging: false,
    });
    
        // const connection = await createPool({
        //     user: "root",
        //     host: "containers-us-west-81.railway.app",
        //     password: "KvjFWYlmAzRyqcYOL3Q1",
        //     port:7890,
        //     database: "railway",
        //     connectionLimit:10
        //     });

    //return connection;
    
//}

export default sequelize;