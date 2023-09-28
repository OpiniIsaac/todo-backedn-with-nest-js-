import { Module } from '@nestjs/common';
import { TodosController } from './todo.controller';
import { TodoService } from './todo.service';
import { TodoScheme } from './todo.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Todo', schema: TodoScheme }])],
  controllers: [TodosController],
  providers: [TodoService],
})
export class TodosModule {}
