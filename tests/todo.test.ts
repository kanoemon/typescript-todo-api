import * as request from 'supertest';
import app from '../src/app';

describe('get', () => {
  it('1件取得', async () => {
    const res = await request(app).get('/todo/1');
    expect(res.status).toBe(200);
  });

  it('全件取得', async () => {
    const res = await request(app).get('/todo');
    expect(res.status).toBe(200);
  });
});

describe('post', () => {
  it ('登録', async() => {
    const res = await request(app).post('/todo').send({name: 'hoge'});
    expect(res.status).toBe(200);
  });
});

describe('put', () => {
  it ('変更', async() => {
    const res = await request(app).put('/todo/1').send({name: 'hoge'});
    expect(res.status).toBe(200);
  });
});

describe('delete', () => {
  it ('削除', async() => {
    const res = await request(app).delete('/todo/1');
    expect(res.status).toBe(200);
  });
});
