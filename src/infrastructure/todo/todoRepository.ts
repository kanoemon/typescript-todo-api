import TodoId from '../../domain/models/todo/todoId';
import Todo from '../../domain/models/todo/todo';
import ITodoRepository from '../../domain/models/todo/iTodoRepository';

class TodoRepository implements ITodoRepository{
  find(todoId: TodoId): Todo | null {
    return new Todo(todoId);
  }

  save(todo: Todo): void {

  }
}

export default TodoRepository;
