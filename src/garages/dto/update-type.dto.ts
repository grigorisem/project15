import { PartialType } from '@nestjs/mapped-types';
import { CreateGarageDto } from './create-garage.dto';
import { TypeOfGarage } from '../entities/type.entity';

export class UpdateGarageDto extends PartialType(CreateGarageDto) {
    type: TypeOfGarage
}