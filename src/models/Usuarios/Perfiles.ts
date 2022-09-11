import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, BaseEntity } from "typeorm"
import { Roles } from './Roles';


@Entity()
export class Perfiles extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @ManyToOne(() => Roles, (roles) => roles.id)
  roles: Roles[]
}