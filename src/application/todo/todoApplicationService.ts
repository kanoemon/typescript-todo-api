import TodoId from '../../domain/models/todo/todoId';
import Todo from '../../domain/models/todo/todo';
import ITodoRepository from '../../domain/models/todo/iTodoRepository';
import Datetime from '../../domain/models/todo/datetime';

class TodoApplicationService {
  private _todoRepository: ITodoRepository;

  constructor(todoRepository: ITodoRepository) {
    this._todoRepository = todoRepository;
  }

  get(todoId: string): Todo {
    let targetId = new TodoId(todoId);
    return this._todoRepository.find(targetId);
  }
  get1(todoId: string): Todo {
    return new Todo(new TodoId('1'), 'todo1', new Datetime('2020/12/31 12:00:00'));
  }

  create(todoId: string, name: string):void {
    let todo = new Todo(
      new TodoId(todoId),
      name,
      new Datetime('2020/12/11 11:00:00')
    );
    this._todoRepository.save(todo);
  }
}

export default TodoApplicationService;
