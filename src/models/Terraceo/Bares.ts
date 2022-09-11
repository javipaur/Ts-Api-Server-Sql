import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from "typeorm"

@Entity()
export class Bares extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    consumMin: number

    @Column()
    opcionesPago:string

    @Column()
    tiempoMaximoOcupacion:Date

    @Column({ default: true })
    isDestacado:boolean

}