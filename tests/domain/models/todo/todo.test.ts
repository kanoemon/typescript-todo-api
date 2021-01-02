import Datetime from '../../../../src/domain/models/todo/datetime';
import Todo from '../../../../src/domain/models/todo/todo';
import TodoId from '../../../../src/domain/models/todo/todoId';

describe ('todo', () => {
  describe ('オブジェクトの生成', () => {
    it ('正常系の生成', () => {
      let todoId = new TodoId(1);
      let createdDatetime = new Datetime('2020/12/31 12:00:00');
      let todo = new Todo(todoId, 'hoge', createdDatetime);
      expect(todo.todoId).toEqual(todoId);
      expect(todo.name).toBe('hoge');
      expect(todo.createdDatetime).toEqual(createdDatetime);
    });

    it ('異常系の生成', () => {
      try {
        let todoId = new TodoId(1);
        let createdDatetime = new Datetime('2020/12/31 12:00:00');
        new Todo(todoId, '', createdDatetime);
      } catch(e) {
        expect(e instanceof TypeError).toBe(true);
      }
    });
  });

  describe ('比較', () => {
    it ('一致する', () => {
      let todoId = new TodoId(1);
      let createdDatetime = new Datetime('2020/12/31 12:00:00');
      let todo = new Todo(todoId, 'hoge', createdDatetime);
      expect(todo.equals(new Todo(todoId, 'hoge', createdDatetime))).toBe(true);
    });

    it ('一致しない', () => {
      let todoId = new TodoId(1);
      let createdDatetime = new Datetime('2020/12/31 12:00:00');
      let todo = new Todo(todoId, 'hoge', createdDatetime);
      expect(todo.equals(new Todo(new TodoId(2), 'hoge', createdDatetime))).toBe(false);
    });
  });
});
