import { DataTypes }  from "sequelize";
import sequelize from "../database";
import User from "./User";

export const Role = sequelize.define("role",{
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
          versionKey:{
            type: DataTypes.BOOLEAN,
           
          }
    });
   
    
   