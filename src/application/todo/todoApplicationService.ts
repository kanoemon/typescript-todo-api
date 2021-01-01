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

  create(todoId: string, name: string):void {
    let todo = new Todo(
      new TodoId(todoId),
      name,
      new Datetime(new Date())
    );
    this._todoRepository.save(todo);
  }
}

export default TodoApplicationService;
