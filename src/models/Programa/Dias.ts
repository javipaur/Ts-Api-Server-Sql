import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from "typeorm"
import { Programa } from './Programa';
import { User } from "../Usuarios/User"

@Entity()
export class Dias extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    dia: string;

    @Column()
    hora: string;

    @Column()
    loc_text: string;

    @Column()
    loc_lat: string;

    @Column()
    localizacion:string;

    @Column()
    categoria: string;

    @Column()
    url: string

    @ManyToOne(() => Programa, (programa) => programa.dias)
    programa: Programa
}