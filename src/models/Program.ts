import { DataTypes } from "sequelize";
import sequelize from "../database";


export const Program = sequelize.define("program",{
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
   // Programa.hasMany(Evento);
   
    
   