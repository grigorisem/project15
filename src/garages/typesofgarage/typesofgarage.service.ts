import { CreateTypeDto } from './../dto/create-type.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Type } from '../entities/type.entity';
import { Repository } from 'typeorm';
import { Car } from 'src/cars/entities/car.entity';
import { Garage } from '../entities/garage.entity';

@Injectable()
export class TypesofgarageService {

    constructor(
        @InjectRepository(Type)
        private readonly typesofgarageRepository: Repository<Type>,
        @InjectRepository(Car)
        private readonly carRepository: Repository<Car>,
        @InjectRepository(Garage)
        private readonly garageRepository: Repository<Garage>
    ){}

    async create(createTypeDto:CreateTypeDto){
        const type = new Type(createTypeDto)
        type.car = await this.carRepository.findOne({
            where: {id: createTypeDto.carID}
        })
        type.garage = await this.garageRepository.findOne({
            where: {id: createGarageDto.address}
        })
        await this.typesofgarageRepository.save(...type, typeOfGarage: TypesofgarageService.create)
        return "Добавлен тип гаража"
    }
    async findAll(){
        return this.typesofgarageRepository.find({
            relations: {
                car: true,
                garage: true
            }
        })
    }

}
