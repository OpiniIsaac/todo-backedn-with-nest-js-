import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}
  getTodos() {
    return 'got toods';
  }
  async createTodos(desc: string, status: string) {
    const newTodo = new this.todoModel({ desc, status });
    await newTodo.save();
    return newTodo;
  }
}
