import { Controller, Get } from '@nestjs/common';

@Controller('items')
export class ItemsController {
  // create endpoints using decorators - this one automatically tells nest to create an endpoint for us, at /items
  @Get()
  // our get decorator will return all the items we have
  findAll(): string {
    return 'Get all items';
  }
}
