import { Controller, Get } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todes')
export class TodosController {
  constructor(private readonly todoService: TodoService) {}
  @Get()
  findAll(): string {
    return this.todoService.getTodos();
  }
}
