import { Sequelize } from 'sequelize/types';


        export const db = new Sequelize('railway','root','KvjFWYlmAzRyqcYOL3Q1',{
            host:'containers-us-west-81.railway.app',
            port:7890,
            dialect:'mysql'   
        });
        
        export default db;
