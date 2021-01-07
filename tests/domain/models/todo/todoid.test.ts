import TodoId from '../../../../src/domain/models/todo/todoId';

describe ('todoid', () => {
  describe ('オブジェクトの生成', () => {
    it ('正常系の生成', () => {
      let todoId = new TodoId(1);
      expect(todoId.id).toBe(1);
    });
  });

  describe ('比較', () => {
    it ('一致する', () => {
      let todoId = new TodoId(1);
      expect(todoId.equals(new TodoId(1))).toBe(true);
    });

    it ('一致しない', () => {
      let todoId = new TodoId(1);
      expect(todoId.equals(new TodoId(2))).toBe(false);
    });
  });
});
