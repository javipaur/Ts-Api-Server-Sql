
import sequelize from "../database";
import { DataTypes } from 'sequelize';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { Role } from './Role';

export const User = sequelize.define("users",
    {
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
      email: {
        type: DataTypes.STRING,
        required:true,
        lowercase:true,
        unique:true,
      },
      password: {
        type: DataTypes.STRING,
        required:true,
      },
      userId:{
        type: DataTypes.STRING,
        required:true,
        unique:true,
      },
      roles:{
        type: DataTypes.STRING,  
      },   
    },
    {
      timestamp: true,
    }
  );
  User.belongsToMany(Role, {
    through: "user_roles",
    as: "role",
    foreignKey: "userId",
  });

  export const encryptPassword =async (password:string):Promise<string> =>{
     const salt =await bcrypt.genSalt(10);
     return bcrypt.hash(password,salt);
  }

  export const validatePassword=async function(passwordBd:string,passwordUser:string):Promise<boolean>{

    return await bcrypt.compare(passwordBd,passwordUser);
  }

  export const createUuId= async function():Promise<string>{

    return await uuidv4();
  }

  export default User;
  