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

  save(targetTodo: Todo): void {
    let index: number = this._todoList.findIndex((todo) => todo.equals(targetTodo));
    if (index === -1) {
      this._todoList.push(targetTodo);
      return;
    }
    this._todoList[index] = targetTodo;
  }

  delete(targetTodo: Todo): void {
    let index: number = this._todoList.findIndex((todo) => todo.equals(targetTodo));
    this._todoList.splice(index, 1);
  }

  nextId(): TodoId {
    if (this._todoList.length === 0) {
      return new TodoId(1);
    }
    let ids = this._todoList.map(todo => todo.todoId.id);
    let maxId = Math.max(...ids);
    return new TodoId(maxId + 1);
  }
}

export default InMemoryTodoRepository;
