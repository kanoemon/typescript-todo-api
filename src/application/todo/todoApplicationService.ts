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
    let todo = this._todoRepository.find(targetId);
    if (todo == null) {
      throw new Error('todo not found');
    }
    return todo;
  }

  create(name: string): void {
    let nowDatetime = new Date();
    let todo = new Todo(
      this._todoRepository.nextId(),
      name,
      new Datetime(nowDatetime.toLocaleString())
    );
    this._todoRepository.save(todo);
  }
}

export default TodoApplicationService;
