import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from "typeorm"

@Entity()
export class Tpv extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

}