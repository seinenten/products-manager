import { IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateProductoDto {

    @MinLength(3)
    @IsString()
    nombre: string;

    @MinLength(3)
    @IsString()
    marca: string;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    precio?: number;

    @IsOptional()
    @IsPositive()
    @IsNumber()
    stock?: number;

    @MinLength(2)
    @IsString()
    modelo: string;

    
}
