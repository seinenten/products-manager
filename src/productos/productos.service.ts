import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Producto } from './entities/producto.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProductosService {

  constructor(
    @InjectModel( Producto.name )
    private readonly productModel: Model<Producto>,
  ){}

  async create(createProductoDto: CreateProductoDto) {

    try {
      const producto = await this.productModel.create(  createProductoDto );
      return producto
    } catch (error) {
      this.handleExceptions(error);
    }


  }

  async findAll() {
    //TodOs agregar paginaciones
    return this.productModel.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} producto`;
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  async remove(id: string) {
    try {
      await this.productModel.findByIdAndDelete(id)
      return 'Se ha eliminado exitosamente';
    } catch (error) {
      this.handleExceptions(error )
    }
  }


  private handleExceptions( error:any ){
    console.log(error);
    throw new InternalServerErrorException('Cant create the product - check server logs')
  }
}
