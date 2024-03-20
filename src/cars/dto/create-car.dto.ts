import { CreateDriverDto } from "./create-driver.dto";

export class CreateCarDto {
    manufacturer:string;
    model:string;
    color:string;
    yearOfManufacture:number;
    price:number;
    driver:CreateDriverDto;
}
