import {
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
} from '@nestjs/common';
import { Get, Param, Body, Res, Query } from '@nestjs/common';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

@Controller('coffees')
export class coffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    // const { limit, offset } = paginationQuery;
    // return `This action returns all coffees. Limit: ${limit} , Offset: ${offset}`;
    return this.coffeesService.findAll(paginationQuery);
  }
  @Get('flavors')
  findAll2(@Res() response, paginationQuery: PaginationQueryDto) {
    // response.status(200).send('This action returns all coffees2');
    return this.coffeesService.findAll(paginationQuery);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    // return `This action returns #${id} coffee`;
    return this.coffeesService.findOne(id);
  }

  @Post()
  // @HttpCode(HttpStatus.ACCEPTED)
  create(@Body() CreateCoffeeDto: CreateCoffeeDto) {
    // return body;
    return this.coffeesService.create(CreateCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateCoffeeDto: UpdateCoffeeDto) {
    // return `This action updates #${id} coffee`;
    return this.coffeesService.update(id, UpdateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return `This action removes #${id} coffee`;
    return this.coffeesService.remove(id);
  }
}
