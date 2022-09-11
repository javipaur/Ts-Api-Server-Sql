import { DataSource } from "typeorm";
import { Categorias } from "../src/models/Categorias/Categorias";
import { Cuadrillas } from "../src/models/Cuadrillas/Cuadrilla";
import { Dias } from "../src/models/Programa/Dias";
import { Programa } from "../src/models/Programa/Programa";
import { Reservas } from "../src/models/Reservas/Reservas";
import { Bares } from "../src/models/Terraceo/Bares";
import { Tpv } from "../src/models/Tpv/Tpv";
import { Perfiles } from "../src/models/Usuarios/Perfiles";
import { Roles } from "../src/models/Usuarios/Roles";
import { User } from "../src/models/Usuarios/User";


export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "typeorm",
  synchronize: true,
  logging: true,
  entities: [User,Perfiles,Roles, Programa,Dias,Categorias,Cuadrillas,Bares,Reservas,Tpv],
  subscribers: [],
  migrations: [],
});


export default AppDataSource;