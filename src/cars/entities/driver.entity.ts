import { AbstractEntity } from "src/abstractions/abstract.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Driver extends AbstractEntity<Driver>{

    @Column({name: "first_name"})
    firstName:string

    @Column({name: "last_name"})
    lastName:string

    @Column()
    age:number

    @Column()
    citizenship:string

}
