import { Type } from 'mysql2/typings/mysql/lib/parsers/typeCast';
import { TypesofgarageService } from './typesofgarage.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTypeDto } from '../dto/create-type.dto';

@Controller('typesofgarage')
export class TypesofgarageController {
    constructor(private readonly TypesofgarageService: TypesofgarageService){}
    @Post()
    create(@Body() createTypeDto: CreateTypeDto){
        return this.TypesofgarageService.create(createTypeDto)
    }
    @Get()
    findAll(){
        return this.TypesofgarageService.findAll()
    }
}
