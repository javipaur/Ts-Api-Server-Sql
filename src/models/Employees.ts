import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../database";

const Employees = sequelize.define(
  "employees",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    country: {
      type: DataTypes.STRING,
    },
    position: {
      type: DataTypes.STRING,
    },
    wage: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamp: true,
  }
);

export default Employees;
