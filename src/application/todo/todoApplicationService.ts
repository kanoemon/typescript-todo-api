import TodoId from '../../domain/models/todo/todoId';
import Todo from '../../domain/models/todo/todo';
import ITodoRepository from '../../domain/models/todo/iTodoRepository';
import Datetime from '../../domain/models/todo/datetime';

class TodoApplicationService {
  private _todoRepository: ITodoRepository;

  constructor(todoRepository: ITodoRepository) {
    this._todoRepository = todoRepository;
  }

  get(todoId: number): Todo {
    let targetId = new TodoId(todoId);
    return this._todoRepository.find(targetId);
  }

  create(todoId: number, name: string):void {
    let todo = new Todo(
      new TodoId(todoId),
      name,
      new Datetime('2020/12/12 00:00:00')
    );
    this._todoRepository.save(todo);
  }
}

export default TodoApplicationService;
