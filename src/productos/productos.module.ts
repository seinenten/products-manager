import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { ConfigModule } from '@nestjs/config';
import { Producto, productoSchema } from './entities/producto.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: Producto.name,
        schema: productoSchema
      }
    ])
  ],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
