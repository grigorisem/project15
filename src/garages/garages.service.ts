import { Injectable } from '@nestjs/common';
import { CreateGarageDto } from './dto/create-garage.dto';
import { UpdateGarageDto } from './dto/update-garage.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Garage } from './entities/garage.entity';
import { Repository } from 'typeorm';
import { Car } from 'src/cars/entities/car.entity';

@Injectable()
export class GaragesService {
  constructor( 
    @InjectRepository(Garage)
    private readonly garageRepository: Repository<Garage>,
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>
  ){}

  async create(createGarageDto: CreateGarageDto) {
    const garage = new Garage(createGarageDto)
    await this.garageRepository.save(garage)

    return 'This action adds a new garage';
  }

  async findAll() {
    return this.garageRepository.find();
  }

  async findOne(id: string) {
    return this.garageRepository.findOne({
      where: {id},
      relations: {
        cars: true
      }
    });
  }

  async update(id: string, updateGarageDto: UpdateGarageDto) {
    const garage = new Garage(updateGarageDto)
    if(updateGarageDto?.carID){
      const car = await this.carRepository.findOneBy({
        id: updateGarageDto.carID
      })
      garage.cars = [...(garage.cars ?? []), car]
    }
    await this.carRepository.save({id, ...garage})
    return `This action updates a #${id} garage`;
  }

  async remove(id: string) {
    await this.carRepository.delete({id})
    return `This action removes a #${id} garage`;
  }
}
