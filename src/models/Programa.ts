import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
  } from "typeorm";
  @Entity()
  export class Programa extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    title: string;
  
    @Column()
    day: string;

    @Column()
    hour: string;

    @Column()
    place_text: string;

    @Column()
    place_lat: string;

    @Column()
    category: string;

    @Column()
    description: string;
  
    @Column({ default: true })
    cancelled: boolean;
  
  }
  