import { DataTypes } from "sequelize/types";
import db from "../db/connection";

const Usuario =db.define('Usuario',{
    nombre:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    tipo:{
        type:DataTypes.BOOLEAN
    },
});

export default Usuario;
