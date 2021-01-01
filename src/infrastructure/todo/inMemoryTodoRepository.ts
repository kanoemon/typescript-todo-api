import TodoId from '../../domain/models/todo/todoId';
import Todo from '../../domain/models/todo/todo';
import ITodoRepository from '../../domain/models/todo/iTodoRepository';

class InMemoryTodoRepository implements ITodoRepository{
  private _todoList: Todo[] = [];

  find(todoId: TodoId): Todo | null {
    for(var todo of this._todoList) {
      if(todo.todoId.equals(todoId)) {
        return todo;
      }
    }
    return null;
  }

  save(todo: Todo): void {
    this._todoList.push(todo);
  }
}

export default InMemoryTodoRepository;
