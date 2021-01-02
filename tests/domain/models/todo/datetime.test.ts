import Datetime from '../../../../src/domain/models/todo/datetime';

describe ('datetime', () => {
  it ('正常系', () => {
    let datetime = new Datetime('2020/12/31 12:00:00');
    expect(datetime.toString()).toBe('2020-12-31 12:00:00');
  });

  it ('異常系 空文字', () => {
    try {
      new Datetime('');
    } catch(e) {
      expect(e instanceof TypeError).toBe(true);
    }
  });
});