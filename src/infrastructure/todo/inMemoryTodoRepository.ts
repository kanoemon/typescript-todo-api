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

  nextId(): TodoId {
    let ids = this._todoList.map(todo => {
      return todo.todoId.id;
    });
    if (ids.length === 0) {
      return new TodoId(1);
    }
    let maxId = Math.max(...ids);
    return new TodoId(maxId + 1);
  }
}

export default InMemoryTodoRepository;
