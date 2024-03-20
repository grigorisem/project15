import { AbstractEntity } from "src/abstractions/abstract.entity";
import { Car } from "src/cars/entities/car.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from "typeorm";
import { Type } from "./type.entity";
@Entity()

export class Garage extends AbstractEntity<Garage> {
    @Column()
    address:string

    @ManyToMany(() => Car, (cars) => cars.garages)
    cars:Car[]

    @OneToMany(() => Type, (types) => types.garage)
    @JoinTable()
    types: Type[]
}
