import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodosController {
  constructor(private todoService: TodoService) {}
  @Get()
  findAll(): string {
    return this.todoService.getTodos();
  }

  @Post('/post')
  createTodo(@Body('desc') desc: string, @Body('status') status: string) {
    const result = this.todoService.createTodos(desc, status);
    return result;
  }
}
