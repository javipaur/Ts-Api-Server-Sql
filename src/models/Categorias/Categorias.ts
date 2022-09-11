import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn, BaseEntity } from "typeorm"


@Entity()
export class Categorias extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    tag: string


}

