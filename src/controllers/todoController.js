const Todo = require('../models/Todo')
const asyncHandler = require('../middlewares/asyncHandler')
const ErrorResponse = require('../scripts/utils/errorResponse')

exports.createTodo = asyncHandler(async (req, res, next) => {
  const todo = await Todo.create(req.body)

  return res.status(201).json({ success: true, data: todo })
})

exports.getTodos = asyncHandler(async (req, res, next) => {
  const todos = await Todo.find()

  return res.status(200).json({ success: true, data: todos })
})

exports.getTodo = asyncHandler(async (req, res, next) => {
  const { id } = req.params

  const todo = await Todo.findById(id)

  if (!todo) {
    return next(new ErrorResponse(`Todo not found with id of ${id}`, 404))
  }

  return res.status(200).json({ success: true, data: todo })
})

exports.updateTodo = asyncHandler(async (req, res, next) => {
  const { id } = req.params

  let todo = await Todo.findById(id)

  if (!todo) {
    return next(new ErrorResponse(`Todo not found with id of ${id}`, 404))
  }

  updatedTodo = await Todo.findOneAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  })

  return res.status(200).json({ success: true, data: updatedTodo })
})

exports.deleteTodo = asyncHandler(async (req, res, next) => {
  const { id } = req.params

  const todo = await Todo.findById(id)

  if (!todo) {
    return next(new ErrorResponse(`Todo not found with id of ${id}`, 404))
  }

  await todo.remove()

  return res.status(200).json({ success: true, data: id })
})
