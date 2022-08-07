import { DataTypes } from "sequelize";
import sequelize from "../database";



export const Event = sequelize.define("event",{
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true, 
          },
          name: {
            type: DataTypes.STRING,
            required:true,
            lowercase:true,
          },  
          
    },
    {
      timestamp: true,
    });

    
   