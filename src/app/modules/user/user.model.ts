import { Schema, model } from 'mongoose';
import { TAddress, TFullName, TOrder, User } from './user.interface';

const fullNameSchema = new Schema<TFullName>({
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
});
const addressSchema = new Schema<TAddress>({
  street: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
  },
  country: {
    type: String,
    trim: true,
  },
});
const orderSchema = new Schema<TOrder>({
  productName: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
});

const userSchema = new Schema<User>({
  userId: {
    type: Number,
    trim: true,
    required: true,
  },
  username: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
  },
  fullName: {
    type: fullNameSchema,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
    trim: true,
  },
  isActive: {
    type: Boolean,
  },
  hobbies: {
    type: [String],
    required: true,
  },
  address: {
    type: addressSchema,
  },
  orders: {
    type: [orderSchema],
  },
});
export const UserModel = model<User>('User', userSchema);
