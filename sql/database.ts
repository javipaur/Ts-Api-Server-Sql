import { DataSource } from "typeorm";
import { Programa } from "../src/models/Programa";
import { User } from "../src/models/User";


export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "typeorm",
  synchronize: true,
  logging: true,
  entities: [User, Programa],
  subscribers: [],
  migrations: [],
});


export default AppDataSource;