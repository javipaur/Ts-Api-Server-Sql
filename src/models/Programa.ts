import { DataTypes } from "sequelize/types";
import sequelize from "../../sql/database";


const Programa = sequelize.define("programa",{
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
      
}

);

export default Programa;
