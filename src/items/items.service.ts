import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './interfaces/Item.interface';
import { Model } from 'mongoose';

// allows us to inject a dependency into a constructor
@Injectable()
// this will expose our mongoose methods
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}
  // interface explains what fields an item has
  // private readonly items: Item[] = [
  //   {
  //     id: '33903839513',
  //     name: 'Item One',
  //     qty: 31,
  //     description: 'This is item one',
  //   },
  //   {
  //     id: '33903839513',
  //     name: 'Item Two',
  //     qty: 96,
  //     description: 'This is item two',
  //   },
  // ];

  // this will be called from our controller - mongoose returns a promise
  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }

  // create new item in remote mongoDB
  async create(item: Item): Promise<Item> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }
}
