import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity()
export class Roles extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

}