import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  getTodos() {
    return 'got toods';
  }
}
