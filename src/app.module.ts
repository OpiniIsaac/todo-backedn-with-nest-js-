import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { todosModule } from './todos/todo.module';

@Module({
  imports: [],
  controllers: [AppController, todosModule],
  providers: [AppService],
})
export class AppModule {}
