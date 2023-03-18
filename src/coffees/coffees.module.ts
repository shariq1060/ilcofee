import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { EventSchema } from 'src/events/entities/event.entity/event.entity';
import { coffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee, CoffeeSchema } from './entities/coffee.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Coffee.name, schema: CoffeeSchema },
      { name: Event.name, schema: EventSchema },
    ]),
  ],
  providers: [CoffeesService],
  controllers: [coffeesController],
  exports: [CoffeesService],
})
export class CoffeesModule {}
