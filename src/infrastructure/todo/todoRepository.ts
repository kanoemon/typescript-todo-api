import TodoId from '../../domain/models/todo/todoId';
import Todo from '../../domain/models/todo/todo';
import ITodoRepository from '../../domain/models/todo/iTodoRepository';
import Datetime from '../../domain/models/todo/datetime';

class TodoRepository implements ITodoRepository{
  find(todoId: TodoId): Todo {
    return new Todo(todoId, 'hoge', new Datetime(new Date()));
  }

  save(todo: Todo): void {

  }
}

export default TodoRepository;
