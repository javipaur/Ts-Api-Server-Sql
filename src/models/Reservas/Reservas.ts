import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity()
export class Reservas extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    personas: number;

    @Column()
    fecha: string;

    @Column()
    hora: string;

}