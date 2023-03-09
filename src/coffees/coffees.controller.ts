import {
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
} from '@nestjs/common';
import { Get, Param, Body, Res, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class coffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    // return `This action returns all coffees. Limit: ${limit} , Offset: ${offset}`;
    return this.coffeesService.findAll();
  }
  @Get('flavors')
  findAll2(@Res() response) {
    // response.status(200).send('This action returns all coffees2');
    return this.coffeesService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    // return `This action returns #${id} coffee`;
    return this.coffeesService.findOne(id);
  }

  @Post()
  // @HttpCode(HttpStatus.ACCEPTED)
  create(@Body() body) {
    // return body;
    return this.coffeesService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    // return `This action updates #${id} coffee`;
    return this.coffeesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return `This action removes #${id} coffee`;
    return this.coffeesService.remove(id);
  }
}
