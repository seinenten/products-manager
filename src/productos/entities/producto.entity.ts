import { Prop, SchemaFactory,Schema } from '@nestjs/mongoose';
import { Document  } from 'mongoose';

@Schema()
export class Producto extends Document {

    @Prop({ required:true  })
    nombre:  string;

    @Prop({ required:true  })
    marca:  string;

    @Prop({ default: 0  })
    precio: number;

    @Prop({ default: 0  })
    stock:  number;

    @Prop({ required:true  })
    modelo:  string;


}

export const productoSchema = SchemaFactory.createForClass( Producto );
