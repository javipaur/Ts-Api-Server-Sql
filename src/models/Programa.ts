import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToMany,
  } from "typeorm";
import { Dias } from "./Dias";
  @Entity()
  export class Programa extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    title: string;
  
    @Column()
    descripcion: string;

    @Column()
    fecInicio: Date;

    @Column()
    fecFin: Date;

    @Column({ default: true })
    cancelled: boolean;

    @OneToMany(() => Dias, (dias) => dias.programa)
    dias: Dias[]
  }
  