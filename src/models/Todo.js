const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
      trim: true,
    },
    status: {
      type: String,
      required: true,
      enum: ['Backlog', 'In progress', 'Done'],
    },
  },
  { timestamps: true, versionKey: false }
)

module.exports = mongoose.model('Todo', TodoSchema)
