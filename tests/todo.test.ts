import * as request from 'supertest';
import app from '../src/app';

describe('get', () => {
  it('複数件の取得', async () => {
    const res = await request(app).get('/todo');
    expect(res.text).toBe('success');
  });
});