import { Module } from '@nestjs/common';
import { GaragesService } from './garages.service';
import { GaragesController } from './garages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Garage } from './entities/garage.entity';
import { Car } from 'src/cars/entities/car.entity';
import { Type } from './entities/type.entity';
import { TypesofgarageController } from './typesofgarage/typesofgarage.controller';
import { TypesofgarageService } from './typesofgarage/typesofgarage.service';

@Module({
  imports:[TypeOrmModule.forFeature([Garage, Car, Type])],
  controllers: [GaragesController, TypesofgarageController],
  providers: [GaragesService, TypesofgarageService],
})
export class GaragesModule {}
