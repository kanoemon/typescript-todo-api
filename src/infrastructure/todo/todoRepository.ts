import TodoId from '../../domain/models/todo/todoId';
import Todo from '../../domain/models/todo/todo';
import ITodoRepository from '../../domain/models/todo/iTodoRepository';
import Datetime from '../../domain/models/todo/datetime';

class TodoRepository implements ITodoRepository{
  find(todoId: TodoId): Todo {
    return new Todo(todoId, 'hoge', new Datetime('2020/12/31 00:00:00'));
  }

  findAll(): Todo[] {
    return [];
  }

  save(todo: Todo): void {
  }

  delete(todo: Todo): void {

  }

  nextId(): TodoId {
    return new TodoId(1);
  }
}

export default TodoRepository;
