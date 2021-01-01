import * as request from 'supertest';
import app from '../../../src/app';
import TodoApplicationService from '../../../src/application/todo/todoApplicationService';
import InMemoryTodoRepository from '../../../src/infrastructure/todo/inMemoryTodoRepository';
import Todo from '../../../src/domain/models/todo/todo';
import TodoId from '../../../src/domain/models/todo/todoId';

describe('get', () => {
  it('1件取得', () => {
    // データの登録
    let todoRepository = new InMemoryTodoRepository();

    let todoWithId1 = new Todo(new TodoId('1'));
    let todoWithId2 = new Todo(new TodoId('2'));
    todoRepository.save(todoWithId1);
    todoRepository.save(todoWithId2);

    let todoApplicationService = new TodoApplicationService(todoRepository);
    expect(todoApplicationService.get('1')).toEqual(todoWithId1);
  });
});