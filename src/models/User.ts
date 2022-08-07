import sequelize from "../../sql/database";
import { DataTypes } from 'sequelize';


const User = sequelize.define("users",
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
  // User.belongsToMany(Role, {
  //   through: "user_roles",
  //   as: "role",
  //   foreignKey: "userId",
  // });

  export default User;
  