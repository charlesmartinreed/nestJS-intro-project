// import {
//   Controller,
//   Get,
//   Post,
//   Put,
//   Delete,
//   Body,
// 	Req,
// 	Res
// } from '@nestjs/common';
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';
// import { Request, Response } from 'express';

@Controller('items')
export class ItemsController {
  // service needs to be injected in order to use it
  constructor(private readonly itemsService: ItemsService) {}
  // create endpoints using decorators - this one automatically tells nest to create an endpoint for us, at /items
  @Get()
  // our get decorator will return all the items we have
  // the old req/res objects are also accessible within NestJS
  // findAll(@Req() req: Request, @Res() res: Response): Response {
  //   console.log(req.url);
  //   return res.send('Hello world!');
  // }
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  // using req params in NestJS
  // @Get(':id')
  // findOne(@Param() param): string {
  //   return `Item ${param.id}`;
  // }

  // alternatively:
  @Get(':id')
  findOne(@Param('id') id): string {
    return `Item ${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete ${id}`;
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
    return `Update ${id} - Name: ${updateItemDto.name}`;
  }

  // send data using NestJS Data Transfer Object (DTO) - which is a class with some fields
  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    // as in express, you use the data in a request body to pull info for your data
    return `Name: ${createItemDto.name} Desc:${createItemDto.description}`;
  }
}
