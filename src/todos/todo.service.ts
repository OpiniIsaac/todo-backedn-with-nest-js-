import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}
  getTodos() {
    const allTodos = this.todoModel.find();
    return allTodos;
  }
  async createTodos(desc: string, status: string) {
    const newTodo = new this.todoModel({ desc, status });
    await newTodo.save();
    return newTodo;
  }
  async deleteTodos(params) {
    const deleteTodos = await this.todoModel.findByIdAndDelete(params).exec();
    return deleteTodos;
  }
  async updateTodos(params) {
    const updateTodosTodos = await this.todoModel
      .findByIdAndUpdate({ _id: params })
      .exec();
    return updateTodosTodos;
  }
}
