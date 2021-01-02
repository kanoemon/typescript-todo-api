import Datetime from '../../../../src/domain/models/todo/datetime';

describe ('datetime', () => {
  describe ('オブジェクトの生成', () => {
    it ('正常系の生成', () => {
      let datetime = new Datetime('2020/12/31 12:00:00');
      expect(datetime.toString()).toBe('2020-12-31 12:00:00');
    });

    it ('異常系の生成', () => {
      try {
        new Datetime('');
      } catch(e) {
        expect(e instanceof TypeError).toBe(true);
      }
    });
  });

  describe ('比較', () => {
    it ('一致する', () => {
      let datetime = new Datetime('2020/12/31 12:00:00');
      expect(datetime.equals(new Datetime('2020/12/31 12:00:00'))).toBe(true);
    });

    it ('一致しない', () => {
      let datetime = new Datetime('2020/12/31 12:00:00');
      expect(datetime.equals(new Datetime('2020/12/30 12:00:00'))).toBe(false);
    });
  });
});
