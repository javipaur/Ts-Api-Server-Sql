import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { User } from '../Usuarios/User';

@Entity()
export class Cuadrillas extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    descripcion: string

    @OneToMany(() => User, (user) => user.id)
    user: User[]
}