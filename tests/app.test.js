const request = require('supertest')
const app = require('../src/app')

describe('Todos API', () => {
  it('GET /v1/todo-list --> get all todos', () => {
    return request(app)
      .get('/v1/todo-list')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            success: true,
            data: expect.any(Array),
          })
        )
      })
  })

  it('GET /v1/todo-list/:id --> get a single todo', () => {
    return request(app)
      .get('/v1/todo-list/63c73db3e4ef94a85ba11571')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            success: true,
            data: expect.any(Object),
          })
        )
      })
  })

  it('GET /v1/todo-list/:id --> 404 if not found', () => {
    return request(app)
      .get('/v1/todo-list/99999999999999999')
      .expect('Content-Type', /json/)
      .expect(404)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            success: false,
            error: expect.any(String),
          })
        )
      })
  })

  it('POST /v1/todo-list --> create a todo', () => {
    return request(app)
      .post('/v1/todo-list')
      .send({ name: 'do dishes', status: 'In progress' })
      .expect('Content-Type', /json/)
      .expect(201)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            success: true,
            data: expect.any(Object),
          })
        )
      })
  })

  it('POST /v1/todo-list --> validates post request body', () => {
    return request(app)
      .post('/v1/todo-list')
      .send({ name: 'a', status: 'string' })
      .expect(400)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            success: false,
            error: expect.any(String),
          })
        )
      })
  })

  it('PATCH /v1/todo-list/:id --> validates patch request body', () => {
    return request(app)
      .patch('/v1/todo-list/63c73db3e4ef94a85ba11571')
      .send({ name: 'a', status: 'string' })
      .expect(400)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            success: false,
            error: expect.any(String),
          })
        )
      })
  })

  it('PATCH /v1/todo-list/:id --> update a todo', () => {
    return request(app)
      .patch('/v1/todo-list/63c73db3e4ef94a85ba11571')
      .send({ name: 'do dishes', status: 'Done' })
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            success: true,
            data: expect.any(Object),
          })
        )
      })
  })

  it('DELETE /v1/todo-list/:id --> delete a todo', () => {
    return request(app)
      .delete('/v1/todo-list/63c73db3e4ef94a85ba11571')
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            success: true,
            data: '63c73db3e4ef94a85ba11571',
          })
        )
      })
  })
})
