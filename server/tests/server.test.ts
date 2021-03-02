import express from 'express';
import serverRoutes from '../src/server';
import request from 'supertest';

const app = express();

app.use('/', serverRoutes);
describe('Test server', () => {
    it('GET / - success', async () => {
      const { body } = await request(app).get("/");
      expect(body).toBe('The sedulous hyena ate the antelope!');
    });
  });
