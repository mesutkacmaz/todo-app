const Todo = require('../models/Todo')
const asyncHandler = require('../middlewares/asyncHandler')

exports.getTodos = asyncHandler(async (req, res, next) => {
  const todos = await Todo.find()

  return res.status(200).json({ success: true, data: todos })
})
