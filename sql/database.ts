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


export const AppDataSource = new DataSource(
{
  type: "mysql",
 // host: process.env.DATABASE_URL,
 // port: 3306,
  //username: "0lkz7h8kv73p0d5zxvu5",
  //password: "pscale_pw_DlGhnTQVcXUYHN5E525A1YGCn25ADoMiKEtqK1tfMIi",
  //database: "gasteizclik",
  synchronize: true,
 // logging: true,
  entities: [User,Perfiles,Roles, Programa,Dias,Categorias,Cuadrillas,Bares,Reservas,Tpv],
  subscribers: [],
  migrations: [],
});


export default AppDataSource;