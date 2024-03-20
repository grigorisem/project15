import { AbstractEntity } from "src/abstractions/abstract.entity";
import { Car } from "src/cars/entities/car.entity";
import { Column, Entity, ManyToMany, ManyToOne } from "typeorm";
import { Garage } from "./garage.entity";
export enum TypeOfGarage{
    attached = "attached",
    detached = "detached"
}
@Entity()

export class Type extends AbstractEntity<Type> {
    @Column()
    typeOfGarage: TypeOfGarage

    @ManyToOne(() => Car)
    car: Car
    @ManyToMany(() => Garage)
    garage: Garage
}