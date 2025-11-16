require('dotenv').config();
const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../src/server');
const RequestType = require('../src/models/RequestType');

const URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/support_api_test';

beforeAll(async () => {
  await mongoose.connect(URI);
  await RequestType.deleteMany({});
  await RequestType.insertMany([
    {
      code: 'TEST_TYPE',
      name: 'Type de test',
      description: 'Pour tests',
      priority: 'medium',
      category: 'test',
      estimatedResponseTime: 1
    }
  ]);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Health endpoint', () => {
  it('GET /health returns 200', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});

describe('Request Types API', () => {
  it('GET /api/request-types returns array', async () => {
    const res = await request(app).get('/api/request-types');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/request-types creates successfully', async () => {
    const payload = {
      code: 'NEW_TYPE',
      name: 'Nouveau type',
      description: 'Création de test',
      priority: 'low',
      category: 'test',
      estimatedResponseTime: 2
    };
    const res = await request(app).post('/api/request-types').send(payload);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.code).toBe('NEW_TYPE');
  });
});
