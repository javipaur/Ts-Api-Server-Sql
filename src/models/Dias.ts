import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Programa } from './Programa';
import { User } from "./User"

@Entity()
export class Dias {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    url: string

    @ManyToOne(() => Programa, (programa) => programa.dias)
    programa: Programa
}