const request = require('supertest');
const app = require('./index');

test('GET / should return Hello message', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
});

