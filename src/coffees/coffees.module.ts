import { Module } from '@nestjs/common';
import { coffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';

@Module({ providers: [CoffeesService], controllers: [coffeesController] })
export class CoffeesModule {}
