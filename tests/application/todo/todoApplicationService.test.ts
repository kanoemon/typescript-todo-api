import TodoApplicationService from '../../../src/application/todo/todoApplicationService';
import InMemoryTodoRepository from '../../../src/infrastructure/todo/inMemoryTodoRepository';
import Todo from '../../../src/domain/models/todo/todo';
import TodoId from '../../../src/domain/models/todo/todoId';
import Datetime from '../../../src/domain/models/todo/datetime';

describe('get', () => {
  it('データが存在する', () => {
    // データの登録
    let todoRepository = new InMemoryTodoRepository();

    let todoWithId1 = new Todo(new TodoId(1), 'todo1', new Datetime('2020/12/31 12:00:00'));
    let todoWithId2 = new Todo(new TodoId(2), 'todo2', new Datetime('2021/01/01 13:00:00'));
    todoRepository.save(todoWithId1);
    todoRepository.save(todoWithId2);

    let todoApplicationService = new TodoApplicationService(todoRepository);
    expect(todoApplicationService.get(1)).toEqual(todoWithId1);
  });

  it('データが存在しない', () => {
    let todoRepository = new InMemoryTodoRepository();
    let todoApplicationService = new TodoApplicationService(todoRepository);
    expect(() => {
      todoApplicationService.get(999);
    }).toThrow();
  });
});

describe('create', () => {
  it('データを登録する', () => {
    let todoRepository = new InMemoryTodoRepository();
    let todoApplicationService = new TodoApplicationService(todoRepository);
    todoApplicationService.create('todo');

    let todo1 = todoApplicationService.get(1);
    expect(todo1.todoId.id).toBe(1);

    todoApplicationService.create('todo2');
    let todo2 = todoApplicationService.get(2);
    expect(todo2.todoId.id).toBe(2);
  });
});
