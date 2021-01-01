import TodoId from '../../domain/models/todo/todoId';
import Todo from '../../domain/models/todo/todo';
import ITodoRepository from '../../domain/models/todo/iTodoRepository';

class InMemoryTodoRepository implements ITodoRepository{
  private _todoList: Todo[] = [];

  find(todoId: TodoId): Todo {
    return new Todo(todoId);
  }

  save(todo: Todo): void {
    this._todoList.push(todo);
  }
}

export default InMemoryTodoRepository;
