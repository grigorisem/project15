import { EntityManager } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Driver } from './entities/driver.entity';
@Injectable()
export class CarsService {
  constructor( 
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>,
    private readonly entityManager: EntityManager) {}
  async create(createCarDto: CreateCarDto) {
    const driver = new Driver(createCarDto.driver)
    const car = new Car({...createCarDto, driver});
    await this.entityManager.save(car); 
    return 'This action adds a new car';
  }

  async findAll() {
    return this.carRepository.find({
      relations:{
        driver: true
      }
    });
  }

  async findOne(id: string) {
    return this.carRepository.findOne({
      where: {id},
      relations: {
        driver: true
      }
    });
  }

  async update(id: string, updateCarDto: UpdateCarDto) {
    await this.carRepository.save({id, ...updateCarDto})
    return `This action updates a #${id} car`;
  }

  async remove(id: string) {
    await this.carRepository.delete({id})
    return `This action removes a #${id} car`;
  }
}
