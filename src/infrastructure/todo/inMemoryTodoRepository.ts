import TodoId from '../../domain/models/todo/todoId';
import Todo from '../../domain/models/todo/todo';
import ITodoRepository from '../../domain/models/todo/iTodoRepository';
import Datetime from '../../domain/models/todo/datetime';

class InMemoryTodoRepository implements ITodoRepository{
  private _todoList: Todo[] = [];
  private _todoListNew: {id: string, name: string, created_datetime: string}[] = [];

  find(todoId: TodoId): Todo {
    for(var todo of this._todoListNew) {
      if(todo.id === todoId.value) {
        return new Todo(
          new TodoId(todo.id),
          todo.name,
          new Datetime(todo.created_datetime)
        );
      }
    }
    return new Todo(new TodoId('1'), 'a', new Datetime('2020/12/11 00:00:00'));

    /*
    for(var todo of this._todoList) {
      if(todo.todoId.equals(todoId)) {
        return new Todo(
          todo.todoId,
          todo.name,
          todo.createdDatetime
        );
      }
    }
    return null;*/
  }

  save(todo: Todo): void {
    this._todoList.push(todo);
    this._todoListNew.push({
      id: todo.todoId.value,
      name: todo.name,
      created_datetime: todo.createdDatetime.getText()
    });
  }
}

export default InMemoryTodoRepository;
