
import sequelize from "../database";
import { DataTypes } from 'sequelize';
import bcrypt from 'bcryptjs';


export const User = sequelize.define(
    "users",
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
      
    },
    {
      timestamp: false,
    }
  );
  export const encryptPassword =async (password:string):Promise<string> =>{
     const salt =await bcrypt.genSalt(10);
     return bcrypt.hash(password,salt);
  }

  export const validatePassword=async function(password1:string,password2:string):Promise<boolean>{
     return await bcrypt.compare(password1,password2);
  }

  export default User;
  