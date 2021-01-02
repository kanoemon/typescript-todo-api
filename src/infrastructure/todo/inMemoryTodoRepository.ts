import TodoId from '../../domain/models/todo/todoId';
import Todo from '../../domain/models/todo/todo';
import ITodoRepository from '../../domain/models/todo/iTodoRepository';
import Datetime from '../../domain/models/todo/datetime';

class InMemoryTodoRepository implements ITodoRepository{
  private _todoList: Todo[] = [];

  find(todoId: TodoId): Todo | null {
    for(var todo of this._todoList) {
      if(todo.todoId.equals(todoId)) {
        return new Todo(
          todo.todoId,
          todo.name,
          todo.createdDatetime
        );
      }
    }
    return null;
  }

  save(todo: Todo): void {
    this._todoList.push(todo);
  }
}

export default InMemoryTodoRepository;
