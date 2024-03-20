import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Driver } from "./driver.entity";
import { AbstractEntity } from "src/abstractions/abstract.entity";
import { Garage } from "src/garages/entities/garage.entity";
import { Type } from "src/garages/entities/type.entity";

@Entity()
export class Car extends AbstractEntity<Car> {

    @Column()
    manufacturer:string

    @Column()
    model:string

    @Column()
    color:string

    @Column({name: "year_of_manufacture"})
    yearOfManufacture:number

    @Column()
    price:number

    @OneToOne(() => Driver, {cascade: true})
    @JoinColumn()
    driver:Driver

    @ManyToMany(() => Garage, (garage) => garage.cars, {cascade: true})
    @JoinTable()
    garages: Garage[]

    @OneToMany(() => Type, (types) => types.car)
    @JoinTable()
    types: Type[]
}
