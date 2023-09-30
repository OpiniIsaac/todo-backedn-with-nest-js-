import mongoose from 'mongoose';

export const UserModel = new mongoose.Schema({
  username: String,
  password: String,
});

export interface User {
  username: string;
  password: string;
}
