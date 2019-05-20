import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/Item.interface';
// allows us to inject a dependency into a constructor
@Injectable()
export class ItemsService {
  // interface explains what fields an item has
  private readonly items: Item[] = [
    {
      id: '33903839513',
      name: 'Item One',
      qty: 31,
      description: 'This is item one',
    },
    {
      id: '33903839513',
      name: 'Item Two',
      qty: 96,
      description: 'This is item two',
    },
  ];

  // this will be called from our controller
  findAll(): Item[] {
    return this.items;
  }
}
