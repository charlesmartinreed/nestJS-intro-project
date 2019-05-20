import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  // create endpoints using decorators - this one automatically tells nest to create an endpoint for us, at /items
  @Get()
  // our get decorator will return all the items we have
  findAll(): string {
    return 'Get all items';
  }

  // send data using NestJS Data Transfer Object (DTO) - which is a class with some fields
  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    // as in express, you use the data in a request body to pull info for your data
    return `Name: ${createItemDto.name} Desc:${createItemDto.description}`;
  }
}
