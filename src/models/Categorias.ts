import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm"
import { Dias } from "./Dias";
import { Programa } from './Programa';
import { User } from "./User"

@Entity()
export class Categorias {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @ManyToOne(() => Dias, (dia) => dia.id)
    dias: Dias
}

