import TodoId from '../../domain/models/todo/todoId';
import Todo from '../../domain/models/todo/todo';
import ITodoRepository from '../../domain/models/todo/iTodoRepository';

class TodoApplicationService {
  private _todoRepository: ITodoRepository;

  constructor(todoRepository: ITodoRepository) {
    this._todoRepository = todoRepository;
  }

  get(todoId: string): Todo {
    let targetId = new TodoId(todoId);
    return this._todoRepository.find(targetId);
  }
}

export default TodoApplicationService;
