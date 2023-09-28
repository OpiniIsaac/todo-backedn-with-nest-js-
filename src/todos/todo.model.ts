import mongoose from 'mongoose';
export const TodoScheme = new mongoose.Schema({
  desc: String,
  status: String,
});
export interface Todo {
  desc: string;
  status: string;
}
