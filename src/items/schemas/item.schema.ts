import * as mongoose from 'mongoose';
export const ItemSchema = new mongoose.Schema({
  // these are our Item fields
  name: String,
  qty: Number,
  description: String,
});
