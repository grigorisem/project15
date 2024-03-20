import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { CarsModule } from './cars/cars.module';
import { GaragesModule } from './garages/garages.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}),DatabaseModule, CarsModule, GaragesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
