import { DataTypes } from "sequelize/types";
import sequelize from "../database";

const Eventos = sequelize.define("eventos",{
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

export default Eventos;