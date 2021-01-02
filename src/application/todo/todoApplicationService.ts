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
    let targetId: TodoId = new TodoId(todoId);
    let todo: Todo | null = this._todoRepository.find(targetId);
    if (todo == null) {
      throw new Error('todo not found');
    }
    return todo;
  }

  getList(): Todo[] {
    let todoList: Todo[] = this._todoRepository.findAll();
    return todoList;
  }

  create(name: string): void {
    let nowDatetime: Date = new Date();
    let todo: Todo = new Todo(
      this._todoRepository.nextId(),
      name,
      new Datetime(nowDatetime.toLocaleString())
    );
    this._todoRepository.save(todo);
  }

  delete(todoId: number): void {
    let targetId: TodoId = new TodoId(todoId);
    let todo: Todo | null = this._todoRepository.find(targetId);
    if (todo == null) {
      throw new Error('todo not found');
    }
    this._todoRepository.delete(todo);
  }

  updateName(todoId: number, name: string): void {
    let targetId: TodoId = new TodoId(todoId);
    let todo: Todo | null = this._todoRepository.find(targetId);
    if (todo == null) {
      throw new Error('todo not found');
    }

    todo.changeName(name);
    this._todoRepository.save(todo);
  }
}

export default TodoApplicationService;
