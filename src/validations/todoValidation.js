const Joi = require('joi')

const createValidation = Joi.object({
  name: Joi.string().required().min(2),
  status: Joi.string().valid('Backlog', 'In progress', 'Done'),
})

const updateValidation = Joi.object({
  name: Joi.string().min(2),
  status: Joi.string().valid('Backlog', 'In progress', 'Done'),
})

module.exports = {
  createValidation,
  updateValidation,
}
