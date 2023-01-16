const express = require('express')
const validate = require('../middlewares/validate')
const schemas = require('../validations/todoValidation')
const {
  createTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/todoController')

const router = express.Router()

router
  .route('/')
  .get(getTodos)
  .post(validate(schemas.createValidation), createTodo)

router
  .route('/:id')
  .get(getTodo)
  .patch(validate(schemas.updateValidation), updateTodo)
  .delete(deleteTodo)

module.exports = router
