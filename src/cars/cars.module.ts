import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';
import { Driver } from './entities/driver.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Car, Driver])],
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
