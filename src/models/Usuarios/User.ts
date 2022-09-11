import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Cuadrillas } from '../Cuadrillas/Cuadrilla';
import { Perfiles } from './Perfiles';
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId:string;

  @Column()
  nombre: string;
  
  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  active: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Cuadrillas, (cuadrilla) => cuadrilla.id)
  cuadrilla: Cuadrillas

  @OneToOne(() => Perfiles)
  @JoinColumn()
  pefiles: Perfiles[]



}
